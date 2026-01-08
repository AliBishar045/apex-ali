import { useState } from "react";
import { SchoolStaff } from "@/types/school";
import StaffCard from "./StaffCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface UnifiedStaffSectionProps {
  staff: SchoolStaff[];
}

const UnifiedStaffSection = ({ staff }: UnifiedStaffSectionProps) => {
  const [filter, setFilter] = useState<"all" | "leadership" | "hod" | "teacher">("all");

  const categories = [
    { id: "all", label: "All Staff" },
    { id: "leadership", label: "Leadership" },
    { id: "hod", label: "Heads of Dept" },
    { id: "teacher", label: "Teaching Staff" },
  ];

  const filteredStaff = staff.filter((member) => {
    if (filter === "all") return true;
    if (filter === "leadership") return member.is_leadership;
    if (filter === "hod") return member.role === "hod";
    if (filter === "teacher") return member.role === "teacher";
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={filter === category.id ? "default" : "outline"}
            onClick={() => setFilter(category.id as any)}
            className="rounded-full"
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStaff.map((member) => (
          <Dialog key={member.id}>
            <DialogTrigger asChild>
              <div className="cursor-pointer transition-transform hover:scale-105">
                <StaffCard staff={member} />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{member.name}</DialogTitle>
                <DialogDescription>{member.title}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col items-center gap-4 py-4">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={member.image_url || ""} alt={member.name} />
                  <AvatarFallback className="text-4xl">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-center space-y-2">
                  <Badge variant="secondary" className="text-lg px-4 py-1">
                    {member.title}
                  </Badge>
                  {member.department && (
                    <p className="text-muted-foreground">
                      Department: <span className="font-semibold text-foreground">{member.department}</span>
                    </p>
                  )}
                  {member.subject && (
                    <p className="text-muted-foreground">
                      Subjects: <span className="font-semibold text-foreground">{member.subject}</span>
                    </p>
                  )}
                  
                  <div className="mt-4 text-left text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                    <p>
                      {member.name} is a dedicated member of our {member.is_leadership ? "leadership" : "teaching"} team, 
                      committed to academic excellence and student development at Apex Group of Schools.
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      
      {filteredStaff.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No staff members found in this category.</p>
      )}
    </div>
  );
};

export default UnifiedStaffSection;
