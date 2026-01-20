import { useState } from "react";
import { GraduationCap, FileText, CheckCircle, Phone, Mail, MapPin, Clock, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-updated.jpg";
import { z } from "zod";

const admissionSchema = z.object({
  student_name: z.string().trim().min(2, "Student name must be at least 2 characters").max(100),
  parent_name: z.string().trim().min(2, "Parent name must be at least 2 characters").max(100),
  parent_phone: z.string().trim().regex(/^[0-9+\-\s()]{10,15}$/, "Please enter a valid phone number"),
  parent_email: z.string().trim().email("Please enter a valid email address").max(255),
  school_preference: z.string().min(1, "Please select a school"),
  grade_level: z.string().min(1, "Please select a grade level"),
  previous_school: z.string().max(200).optional(),
  message: z.string().max(1000).optional(),
});

const Admissions = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    student_name: "",
    parent_name: "",
    parent_phone: "",
    parent_email: "",
    school_preference: "",
    grade_level: "",
    previous_school: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = admissionSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const res = await fetch(`${baseUrl}/api/admissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_name: formData.student_name.trim(),
          parent_name: formData.parent_name.trim(),
          parent_phone: formData.parent_phone.trim(),
          parent_email: formData.parent_email.trim(),
          school_preference: formData.school_preference,
          grade_level: formData.grade_level,
          previous_school: formData.previous_school?.trim() || "",
          message: formData.message?.trim() || "",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Request failed");
      }

      setSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "We will contact you soon regarding your child's admission.",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const requirements = [
    "Copy of birth certificate",
    "Previous school report cards",
    "4 passport-size photos",
    "Copy of parent/guardian ID",
    "Medical certificate",
    "Transfer letter (for transfers)",
  ];

  const feeStructure = [
    { school: "Boys High School (Boarding)", termFee: "KES 80,000", includes: "Tuition, Meals, Accommodation" },
    { school: "Girls High School (Day)", termFee: "KES 80,000", includes: "Tuition, Lunch" },
    { school: "Junior School (Primary)", termFee: "KES 45,000-55,000", includes: "Tuition, Lunch, Transport (optional)" },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center bg-card rounded-3xl p-10 shadow-card border border-border">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">
            Application Submitted Successfully!
          </h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your interest in APEX GROUP OF SCHOOLS. Our admissions team will 
            review your application and contact you within 3-5 business days.
          </p>
          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link to="/">Return to Homepage</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <a href="tel:+254720253298">
                <Phone className="w-4 h-4 mr-2" />
                Call Admissions: 0720 253 298
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Apex School Logo" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <p className="font-display font-bold text-foreground text-lg">APEX GROUP OF SCHOOLS</p>
              <p className="text-xs text-muted-foreground">Excellence in Education</p>
            </div>
          </Link>
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary-gradient py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
            <GraduationCap className="w-5 h-5" />
            <span className="font-semibold">Admissions Open 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Begin Your Child's Journey
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join the APEX family and give your child the gift of quality education 
            with strong values and academic excellence.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Application Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">Application Form</h2>
                  <p className="text-muted-foreground text-sm">Fill in the details below to apply</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="student_name">Student's Full Name *</Label>
                    <Input
                      id="student_name"
                      placeholder="Enter student's full name"
                      value={formData.student_name}
                      onChange={(e) => handleChange("student_name", e.target.value)}
                      className={errors.student_name ? "border-destructive" : ""}
                    />
                    {errors.student_name && <p className="text-destructive text-sm">{errors.student_name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade_level">Grade/Class Applying For *</Label>
                    <Select value={formData.grade_level} onValueChange={(v) => handleChange("grade_level", v)}>
                      <SelectTrigger className={errors.grade_level ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select grade level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pp1">PP1 (Pre-Primary 1)</SelectItem>
                        <SelectItem value="pp2">PP2 (Pre-Primary 2)</SelectItem>
                        <SelectItem value="grade1">Grade 1</SelectItem>
                        <SelectItem value="grade2">Grade 2</SelectItem>
                        <SelectItem value="grade3">Grade 3</SelectItem>
                        <SelectItem value="grade4">Grade 4</SelectItem>
                        <SelectItem value="grade5">Grade 5</SelectItem>
                        <SelectItem value="grade6">Grade 6</SelectItem>
                        <SelectItem value="grade7">Grade 7</SelectItem>
                        <SelectItem value="grade8">Grade 8</SelectItem>
                        <SelectItem value="grade8">Grade 9</SelectItem>
                        <SelectItem value="grade8">Grade 10</SelectItem>
                        <SelectItem value="grade8">Grade 11</SelectItem>
                        <SelectItem value="grade8">Grade 12</SelectItem>
      
                      
                        <SelectItem value="form3">Form 3</SelectItem>
                        <SelectItem value="form4">Form 4</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.grade_level && <p className="text-destructive text-sm">{errors.grade_level}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="school_preference">Preferred School *</Label>
                  <Select value={formData.school_preference} onValueChange={(v) => handleChange("school_preference", v)}>
                    <SelectTrigger className={errors.school_preference ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select preferred school" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="boys_high">Apex Boys Senior School (Gataka - Boarding)</SelectItem>
                      <SelectItem value="girls_high">Apex Girls Secondary and Senior  School (South C - Day)</SelectItem>
                      <SelectItem value="junior">Apex Junior School (South C Mugoya - Primary)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.school_preference && <p className="text-destructive text-sm">{errors.school_preference}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parent_name">Parent/Guardian Name *</Label>
                    <Input
                      id="parent_name"
                      placeholder="Enter parent's full name"
                      value={formData.parent_name}
                      onChange={(e) => handleChange("parent_name", e.target.value)}
                      className={errors.parent_name ? "border-destructive" : ""}
                    />
                    {errors.parent_name && <p className="text-destructive text-sm">{errors.parent_name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parent_phone">Phone Number *</Label>
                    <Input
                      id="parent_phone"
                      placeholder="e.g., 0720253298"
                      value={formData.parent_phone}
                      onChange={(e) => handleChange("parent_phone", e.target.value)}
                      className={errors.parent_phone ? "border-destructive" : ""}
                    />
                    {errors.parent_phone && <p className="text-destructive text-sm">{errors.parent_phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parent_email">Email Address *</Label>
                    <Input
                      id="parent_email"
                      type="email"
                      placeholder="Enter email address"
                      value={formData.parent_email}
                      onChange={(e) => handleChange("parent_email", e.target.value)}
                      className={errors.parent_email ? "border-destructive" : ""}
                    />
                    {errors.parent_email && <p className="text-destructive text-sm">{errors.parent_email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previous_school">Previous School (if any)</Label>
                    <Input
                      id="previous_school"
                      placeholder="Enter previous school name"
                      value={formData.previous_school}
                      onChange={(e) => handleChange("previous_school", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Any additional information you'd like to share..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Requirements */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <h3 className="text-lg font-display font-bold text-foreground mb-4">
                Admission Requirements
              </h3>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fee Structure */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <h3 className="text-lg font-display font-bold text-foreground mb-4">
                Fee Structure (Per Term)
              </h3>
              <div className="space-y-4">
                {feeStructure.map((item, index) => (
                  <div key={index} className="p-4 bg-surface rounded-xl">
                    <p className="font-semibold text-foreground text-sm">{item.school}</p>
                    <p className="text-primary font-bold text-lg">{item.termFee}</p>
                    <p className="text-muted-foreground text-xs">{item.includes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-primary-gradient rounded-2xl p-6 text-primary-foreground">
              <h3 className="text-lg font-display font-bold mb-4">Need Help?</h3>
              <div className="space-y-4">
                <a href="tel:+254720253298" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <Phone className="w-5 h-5" />
                  <span>0720 253 298</span>
                </a>
                <a href="mailto:apexboys2023@gmail.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">apexboys2023@gmail.com</span>
                </a>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Mon - Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
