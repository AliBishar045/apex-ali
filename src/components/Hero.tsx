import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/nairobi-hero.jpeg";

const Hero = () => {
  const stats = [
    { icon: TrendingUp, value: "500+", label: "Profitable Trades" },
    { icon: Users, value: "200+", label: "Students Mentored" },
    { icon: Award, value: "5+", label: "Years Experience" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(42_87%_55%_/_0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(220_18%_20%_/_0.5),_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wider uppercase animate-fade-up">
                Professional Forex Trader & Mentor
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Master the{" "}
                <span className="text-gradient">Forex Markets</span> with
                Confidence
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Cut through the noise with a proven, repeatable trading system.
                Learn how the markets actually move and profit consistently.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Join Mentorship
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <stat.icon className="w-6 h-6 text-primary mb-2 mx-auto md:mx-0" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden glow-gold">
                <img
                  src={heroImage}
                  alt="Nairobi FX Trader"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
