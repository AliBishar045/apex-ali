import { CheckCircle2, BookOpen, Users, Award } from "lucide-react";
import studyingImage from "@/assets/boys-studying.jpeg";

const About = () => {
  const highlights = [
    "Holistic education combining academics and character building",
    "Qualified and experienced teaching staff",
    "Modern learning facilities and resources",
    "Focus on both Islamic values and academic excellence",
    "Safe and nurturing environment for all students",
    "Extracurricular activities and sports programs",
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      desc: "CBC and 8-4-4 curriculum with excellent results",
    },
    {
      icon: Users,
      title: "Dedicated Teachers",
      desc: "Experienced educators committed to student success",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Track record of academic achievement",
    },
  ];

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={studyingImage}
                alt="Students studying at Apex School"
                className="w-full h-auto"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-card border border-border">
              <p className="text-4xl font-display font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Nurturing Tomorrow's{" "}
              <span className="text-gradient">Leaders Today</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              APEX GROUP OF SCHOOLS is dedicated to providing quality education 
              that develops the whole child — intellectually, spiritually, and 
              socially. Our schools combine academic rigor with character 
              development, preparing students for success in higher education 
              and life.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-xl border border-border">
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground text-sm">{feature.title}</p>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
