import { MapPin, Link as LinkIcon, Navigation } from "lucide-react";

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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                { label: "Campus Maps", href: "#campus-locations" },
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

        {/* Maps Section */}
        <div id="campus-locations" className="mt-16">
          <h3 className="text-2xl font-display font-bold text-center mb-10">Our Campus Locations</h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Apex Boys High School */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="p-4 border-b border-border bg-muted/20">
                <h4 className="font-bold font-display flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" /> Apex Boys High School
                </h4>
                <p className="text-sm text-muted-foreground ml-6">Gataka Road, Rongai</p>
              </div>
              <div className="h-64 w-full bg-muted relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=-1.3776404,36.7259091&z=15&output=embed"
                ></iframe>
              </div>
              <div className="p-4 bg-muted/10 border-t border-border mt-auto">
                <a 
                  href="https://www.google.com/maps/place/Apex+Boys+High+school/@-1.377635,36.7233342,17z/data=!4m14!1m7!3m6!1s0x182f05974ed81431:0x610f1ebd0e7be015!2sApex+Boys+High+school!8m2!3d-1.3776404!4d36.7259091!16s%2Fg%2F11sdfzw_sd!3m5!1s0x182f05974ed81431:0x610f1ebd0e7be015!8m2!3d-1.3776404!4d36.7259091!16s%2Fg%2F11sdfzw_sd?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium text-sm"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>

            {/* Apex Girls High School */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="p-4 border-b border-border bg-muted/20">
                <h4 className="font-bold font-display flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-pink-600" /> Apex Girls High School
                </h4>
                <p className="text-sm text-muted-foreground ml-6">South C, Nairobi</p>
              </div>
              <div className="h-64 w-full bg-muted relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=-1.3239791,36.8386562&z=15&output=embed"
                ></iframe>
              </div>
              <div className="p-4 bg-muted/10 border-t border-border mt-auto">
                <a 
                  href="https://www.google.com/maps/place/Apex+girls+high+School/@-1.3238375,36.8371717,17.85z/data=!4m14!1m7!3m6!1s0x182fbd18ccda48ff:0x46fcc0afc3c34f48!2sApex+girls+high+School!8m2!3d-1.3239791!4d36.8386562!16s%2Fg%2F11tn_cnpff!3m5!1s0x182fbd18ccda48ff:0x46fcc0afc3c34f48!8m2!3d-1.3239791!4d36.8386562!16s%2Fg%2F11tn_cnpff?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium text-sm"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>

            {/* Apex Junior School */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="p-4 border-b border-border bg-muted/20">
                <h4 className="font-bold font-display flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-600" /> Apex Junior School
                </h4>
                <p className="text-sm text-muted-foreground ml-6">Mugoya Estate, South C</p>
              </div>
              <div className="h-64 w-full bg-muted relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=-1.3203004,36.8279453&z=15&output=embed"
                ></iframe>
              </div>
              <div className="p-4 bg-muted/10 border-t border-border mt-auto">
                <a 
                  href="https://www.google.com/maps/place/Apex+Junior+School,Mugoya+Shopping+Centre+South+C/@-1.3202559,36.8268201,18.38z/data=!4m6!3m5!1s0x182f11efc28c55cb:0xee2206877a6d7955!8m2!3d-1.3203004!4d36.8279453!16s%2Fg%2F11q3ybmn7r?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium text-sm"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Sitemap;
