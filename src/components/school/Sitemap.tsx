import { MapPin, Link as LinkIcon } from "lucide-react";

const Sitemap = () => {
  return (
    <section id="sitemap" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wider uppercase mb-3">
            Site Map
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Everything on One Page
          </h2>
          <p className="text-muted-foreground mt-3">
            Quick links to sections, with separate anchors for each school.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
            <h3 className="font-display font-bold text-lg mb-4">General</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "News & Events", href: "#news" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <LinkIcon className="w-4 h-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
            <h3 className="font-display font-bold text-lg mb-4">Our Schools</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Apex Boys High School", href: "#school-boys" },
                { label: "Apex Girls High School", href: "#school-girls" },
                { label: "Apex Junior School", href: "#school-junior" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
            <h3 className="font-display font-bold text-lg mb-4">Admissions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/admissions"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <LinkIcon className="w-4 h-4" />
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
