import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import crypto from "crypto";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const uri = process.env.MONGODB_URI;
let useMemory = !uri;
let AdmissionModel = null;
let memoryStore = [];

if (uri) {
  try {
    await mongoose.connect(uri, { dbName: process.env.MONGODB_DB || "apex" });
    const schema = new mongoose.Schema(
      {
        student_name: { type: String, required: true },
        parent_name: { type: String, required: true },
        parent_phone: { type: String, required: true },
        parent_email: { type: String, required: true },
        school_preference: { type: String, required: true },
        grade_level: { type: String, required: true },
        previous_school: { type: String },
        message: { type: String },
        status: { type: String, default: "pending" },
      },
      { timestamps: true }
    );
    AdmissionModel = mongoose.model("Admission", schema);
    useMemory = false;
  } catch {
    useMemory = true;
  }
}

app.get("/api/health", (req, res) => {
  res.json({ ok: true, mongo: !useMemory });
});

app.post("/api/admissions", async (req, res) => {
  const body = req.body || {};
  const required = [
    "student_name",
    "parent_name",
    "parent_phone",
    "parent_email",
    "school_preference",
    "grade_level",
  ];
  for (const key of required) {
    if (!body[key] || String(body[key]).trim() === "") {
      return res.status(400).json({ error: `${key} is required` });
    }
  }
  try {
    if (!useMemory) {
      const doc = await AdmissionModel.create(body);
      return res.status(201).json(doc);
    } else {
      const id = crypto.randomUUID();
      const item = {
        id,
        ...body,
        status: body.status || "pending",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      memoryStore.unshift(item);
      return res.status(201).json(item);
    }
  } catch {
    return res.status(500).json({ error: "Failed to create admission" });
  }
});

app.get("/api/admissions", async (req, res) => {
  try {
    if (!useMemory) {
      const list = await AdmissionModel.find().sort({ createdAt: -1 }).lean();
      return res.json(list);
    } else {
      return res.json(memoryStore);
    }
  } catch {
    return res.status(500).json({ error: "Failed to fetch admissions" });
  }
});

app.put("/api/admissions/:id", async (req, res) => {
  const { id } = req.params;
  const update = req.body || {};
  try {
    if (!useMemory) {
      const doc = await AdmissionModel.findByIdAndUpdate(id, update, { new: true }).lean();
      if (!doc) return res.status(404).json({ error: "Not found" });
      return res.json(doc);
    } else {
      const idx = memoryStore.findIndex((x) => x.id === id);
      if (idx === -1) return res.status(404).json({ error: "Not found" });
      memoryStore[idx] = { ...memoryStore[idx], ...update, updated_at: new Date().toISOString() };
      return res.json(memoryStore[idx]);
    }
  } catch {
    return res.status(500).json({ error: "Failed to update admission" });
  }
});

app.delete("/api/admissions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!useMemory) {
      const doc = await AdmissionModel.findByIdAndDelete(id).lean();
      if (!doc) return res.status(404).json({ error: "Not found" });
      return res.json({ ok: true });
    } else {
      const before = memoryStore.length;
      memoryStore = memoryStore.filter((x) => x.id !== id);
      if (memoryStore.length === before) return res.status(404).json({ error: "Not found" });
      return res.json({ ok: true });
    }
  } catch {
    return res.status(500).json({ error: "Failed to delete admission" });
  }
});

const port = parseInt(process.env.PORT || "3001", 10);

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

export default app;
