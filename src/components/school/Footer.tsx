import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo-updated.jpg";
import { trackSocialClick } from "@/lib/analytics";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Schools", href: "#schools" },
    { label: "News & Events", href: "#news" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Gallery", href: "#gallery" },
    { label: "Admissions", href: "/admissions" },
    { label: "Contact", href: "#contact" },
  ];

  const schools = [
    "Apex Boys High School - Gataka Road,Rongai , Kajiado county",
    "Apex Girls High School - Next To Knec, South C, Nairobi ",
    "Apex Junior School - Mugoya Estate, South C,Nairobi ",
  ];

  const handleSocialClick = (platform: string) => {
    trackSocialClick(platform, "Footer");
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="h-1 bg-primary-gradient" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Apex School Logo" className="h-12 w-auto rounded" />
              <div>
                <p className="font-display font-bold text-lg text-gradient-accent">APEX SCHOOLS</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Excellence in education. Nurturing tomorrow's leaders through 
              quality education and strong values.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/p/Apex-Group-Of-Schools-KE-100079193852877/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-blue-600 p-2 rounded-full transition-colors text-white"
                aria-label="Facebook"
                onClick={() => handleSocialClick("Facebook")}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/apexschool_ke/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-pink-600 p-2 rounded-full transition-colors text-white"
                aria-label="Instagram"
                onClick={() => handleSocialClick("Instagram")}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-red-600 p-2 rounded-full transition-colors text-white"
                aria-label="YouTube"
                onClick={() => handleSocialClick("YouTube")}
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Schools */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Our Schools</h4>
            <ul className="space-y-2">
              {schools.map((school, index) => (
                <li key={index} className="text-background/70 text-sm flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  {school}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${import.meta.env.VITE_CONTACT_PHONE_TEL}`}
                  className="text-background/70 hover:text-background transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {import.meta.env.VITE_CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                  className="text-background/70 hover:text-background transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {import.meta.env.VITE_CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} APEX GROUP OF SCHOOLS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
