import { GraduationCap, Signal, Users2, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "1-on-1 Mentorship",
      description:
        "Personalized coaching sessions tailored to your trading level. Learn at your own pace with direct access to expert guidance.",
      features: ["Live trading sessions", "Personal strategy development", "Weekly progress reviews"],
    },
    {
      icon: Signal,
      title: "Trading Signals",
      description:
        "Get real-time trade setups and market analysis delivered straight to you. Follow along and learn while you earn.",
      features: ["Daily trade alerts", "Entry & exit points", "Risk management included"],
    },
    {
      icon: Users2,
      title: "Group Classes",
      description:
        "Join our community of traders in interactive group sessions. Learn together, grow together.",
      features: ["Weekly live classes", "Community support", "Recorded sessions"],
    },
    {
      icon: BookOpen,
      title: "Trading Course",
      description:
        "Comprehensive forex education from basics to advanced strategies. Build a solid foundation for your trading career.",
      features: ["50+ video lessons", "Trading templates", "Lifetime access"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-muted-foreground">
            Whether you're a complete beginner or looking to refine your
            strategy, I have the right program for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <a href="#contact">Learn More</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
