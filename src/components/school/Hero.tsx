import { ArrowRight, GraduationCap, BookOpen, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/boys-hero.jpeg";

const Hero = () => {
  const initialHero = (import.meta.env.VITE_HERO_IMAGE_URL as string) || heroImage;
  const [imgSrc, setImgSrc] = useState<string>(initialHero);
  return (
    <section id="home" className="pt-24 md:pt-28 bg-hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-4 h-4" />
              <span className="text-xl md:text-2xl font-semibold">Welcome to APEX GROUP OF SCHOOLS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Where Excellence{" "}
              <span className="text-gradient">Meets Purpose</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              We shape minds and nurture hearts. Every child is seen, heard, and 
              inspired — learning not just from books, but through discovery, 
              identity, and excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="group shadow-glow" asChild>
                <a href="#contact">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#schools">Explore Our Schools</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "3", label: "Campuses", icon: BookOpen },
                { value: "500+", label: "Students", icon: GraduationCap },
                { value: "50+", label: "Teachers", icon: Heart },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left group">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-primary/60" />
                    <p className="text-3xl font-display font-bold text-primary group-hover:scale-105 transition-transform">
                      {stat.value}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-card hover-lift">
              <img
                src={imgSrc}
                alt="Apex Boys High School Students"
                className="w-full h-auto object-cover"
                onError={() => setImgSrc(heroImage)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-secondary/20 rounded-3xl -z-10 animate-float" />
            <div className="absolute -top-6 -right-6 w-36 h-36 bg-primary/10 rounded-3xl -z-10 animate-float" style={{ animationDelay: "1s" }} />
            
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-card border border-border">
              <p className="text-xs text-muted-foreground mb-1">Established</p>
              <p className="text-xl font-display font-bold text-primary">Since 2013</p>
            </div>
            <div className="mt-4 text-center text-lg font-bold text-primary">
              Our Classes of 2025 with Ahmed, Principal of Boys Senior School
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
