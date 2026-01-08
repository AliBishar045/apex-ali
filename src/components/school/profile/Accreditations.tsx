import { BadgeCheck } from "lucide-react";

const Accreditations = () => {
  const badges = [
    { name: "Ministry of Education", subtitle: "Fully Registered" },
    { name: "KNEC Center", subtitle: "Exam Center" },
    { name: "CBC Compliant", subtitle: "Approved Curriculum" },
    { name: "KPSA Member", subtitle: "Private Schools Assn" },
  ];

  return (
    <div className="border-t border-border mt-16 py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
            Accredited & Recognized By
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-border flex items-center justify-center shadow-sm group-hover:border-primary/50 transition-colors">
                <BadgeCheck className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-sm text-foreground">{badge.name}</h4>
                <p className="text-xs text-muted-foreground">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accreditations;
