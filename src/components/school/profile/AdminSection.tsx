import { SchoolStaff } from "@/types/school";
import StaffCard from "./StaffCard";

interface AdminSectionProps {
  staff: SchoolStaff[];
}

const AdminSection = ({ staff }: AdminSectionProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {staff.map((member) => (
        <StaffCard key={member.id} staff={member} />
      ))}
    </div>
  );
};

export default AdminSection;
