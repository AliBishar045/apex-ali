import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: import.meta.env.VITE_CONTACT_PHONE_DISPLAY,
      href: `tel:${import.meta.env.VITE_CONTACT_PHONE_TEL}`,
      action: "Call Now",
    },
    {
      icon: Mail,
      label: "Email",
      value: import.meta.env.VITE_CONTACT_EMAIL,
      href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`,
      action: "Send Email",
    },
  ];

  const locations = [
    {
      name: "Boys High School",
      address: "Gataka, Nairobi County",
      type: "Boarding",
    },
    {
      name: "Girls High School",
      address: "South C, Nairobi",
      type: "Day School",
    },
    {
      name: "Junior School",
      address: "South C Mugoya, Nairobi",
      type: "Primary",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Contact{" "}
              <span className="text-gradient">APEX Schools</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about admissions, fees, or our programs? We're here 
              to help. Reach out to us today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="group bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <info.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                <p className="text-lg font-semibold text-foreground mb-4">
                  {info.value}
                </p>
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">{info.action}</Button>
              </a>
            ))}
          </div>

          {/* Office Hours */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Office Hours: Monday - Friday, 8:00 AM - 5:00 PM</span>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 bg-primary-gradient rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
              Start Your Child's Journey Today
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Join the Apex family and give your child the gift of quality 
              education. Admissions are now open for the new academic year.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-card text-foreground hover:bg-card/90"
              asChild
            >
              <a href="tel:+254720253298">
                <Phone className="mr-2 w-5 h-5" />
                Call for Admissions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
