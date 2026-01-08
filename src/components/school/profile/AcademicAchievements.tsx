import { Trophy, Star, Medal, BookOpen } from "lucide-react";

interface Achievement {
  title: string;
  value: string;
  description: string;
  icon: any;
}

interface AcademicAchievementsProps {
  items?: Achievement[];
}

const AcademicAchievements = ({ items }: AcademicAchievementsProps) => {
  const defaultItems = [
    {
      title: "KCSE Mean Score",
      value: "8.5 B+",
      description: "Consistent academic excellence in national exams",
      icon: Trophy,
    },
    {
      title: "University Entry",
      value: "92%",
      description: "Of our students qualify for direct university entry",
      icon: BookOpen,
    },
    {
      title: "National Awards",
      value: "15+",
      description: "Trophies in Science Congress & Drama Festivals",
      icon: Medal,
    },
    {
      title: "Student Satisfaction",
      value: "4.8/5",
      description: "Rated by parents and alumni for holistic growth",
      icon: Star,
    },
  ];

  const displayItems = items || defaultItems;

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Academic Excellence
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A track record of success and continuous improvement in both academic and co-curricular activities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayItems.map((item, index) => (
          <div 
            key={index} 
            className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2">{item.value}</h3>
            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicAchievements;
