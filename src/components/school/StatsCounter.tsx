import { useEffect, useState, useRef } from "react";
import { Users, GraduationCap, Award, BookOpen } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Users, value: 500, suffix: "+", label: "Students Enrolled" },
  { icon: GraduationCap, value: 50, suffix: "+", label: "Qualified Teachers" },
  { icon: Award, value: 10, suffix: "+", label: "Years of Excellence" },
  { icon: BookOpen, value: 3, suffix: "", label: "Campus Locations" },
];

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
};

const StatsCounter = () => {
  return (
    <section className="py-20 bg-primary-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-20 w-48 h-48 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            APEX By the Numbers
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            A legacy of excellence built over years of dedication to quality education
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-foreground/20 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-2">
                <CountUp end={stat.value} />
                {stat.suffix}
              </p>
              <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
