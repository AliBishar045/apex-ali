import { User } from "lucide-react";
import { SchoolStaff } from "@/types/school";

interface StaffCardProps {
  staff: SchoolStaff;
}

const StaffCard = ({ staff }: StaffCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-[3/4] overflow-hidden bg-muted relative">
        {staff.image_url ? (
          <img
            src={staff.image_url}
            alt={staff.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
            <User className="w-16 h-16 opacity-50" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-display font-bold text-foreground text-lg mb-1">
          {staff.name}
        </h4>
        <p className="text-primary font-medium text-sm mb-1">{staff.title}</p>
        {staff.department && (
          <p className="text-muted-foreground text-xs">
            Dept: {staff.department}
          </p>
        )}
        {staff.subject && (
          <p className="text-muted-foreground text-xs">
            Subject: {staff.subject}
          </p>
        )}
      </div>
    </div>
  );
};

export default StaffCard;
