const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-display font-bold text-gradient mb-2">
              Nairobi FX Trader
            </p>
            <p className="text-sm text-muted-foreground">
              Professional Forex Trading & Mentorship
            </p>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nairobi FX Trader. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Trading forex involves substantial risk. Past performance is not
            indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
