import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "0725 245 288",
      href: "tel:+254725245288",
      action: "Call Now",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "0725 245 288",
      href: "https://wa.me/254725245288?text=Hi%20Nairobi%20FX%20Trader!%20I'm%20interested%20in%20your%20forex%20mentorship.",
      action: "Chat on WhatsApp",
    },
    {
      icon: Mail,
      label: "Email",
      value: "nairobifxtrader@gmail.com",
      href: "mailto:nairobifxtrader@gmail.com",
      action: "Send Email",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to{" "}
              <span className="text-gradient">Transform Your Trading?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards financial freedom. Reach out today and
              let's discuss how I can help you achieve your trading goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.label === "WhatsApp" ? "_blank" : undefined}
                rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="group bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {method.label}
                </p>
                <p className="text-lg font-semibold text-foreground mb-4">
                  {method.value}
                </p>
                <Button variant="outline" className="w-full">
                  {method.action}
                </Button>
              </a>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-gold-gradient rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
              Start Your Journey Today
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Join hundreds of successful traders who have transformed their
              financial future with my proven trading system.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <a
                href="https://wa.me/254725245288?text=Hi%20Nairobi%20FX%20Trader!%20I%20want%20to%20start%20my%20forex%20journey."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Message Me on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
