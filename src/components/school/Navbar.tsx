import { useState } from "react";
import { Menu, X, Phone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/apex-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Our Schools", href: "#schools" },
    { label: "Programs", href: "#programs" },
    { label: "News", href: "#news" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Apex School Logo" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <p className="font-display font-bold text-foreground text-lg leading-tight">
                APEX GROUP OF SCHOOLS
              </p>
              <p className="text-xs text-muted-foreground">Excellence in Education</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+254720253298">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>
            </Button>
            <Button size="sm" asChild>
              <Link to="/admissions">
                <GraduationCap className="w-4 h-4 mr-2" />
                Apply Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="xl:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" asChild>
                  <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE_TEL}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </a>
                </Button>
                <Button asChild>
                  <Link to="/admissions">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
        <div className="h-0.5 bg-primary-gradient rounded-full" />
      </div>
    </nav>
  );
};

export default Navbar;
