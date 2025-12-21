import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/nairobi-about.jpeg";

const About = () => {
  const highlights = [
    "Over 5 years of professional forex trading experience",
    "Specialized in Gold (XAUUSD), GBPUSD, and EURUSD pairs",
    "Proven track record with consistent profitability",
    "Mentored 200+ students to trading success",
    "Expert in price action and market structure analysis",
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(220_18%_10%),_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Nairobi FX Trader - About"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 glow-gold">
              <p className="text-4xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Years Trading</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wider uppercase">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Your Guide to{" "}
                <span className="text-gradient">Financial Freedom</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm Nairobi FX Trader, a professional forex trader and mentor
                dedicated to helping aspiring traders master the markets. My
                journey in forex trading has taught me that success comes from
                understanding market structure, discipline, and a proven
                strategy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in trading major currency pairs and gold using
                price action and smart money concepts. My mission is to share
                this knowledge and help you achieve consistent profitability.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
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
