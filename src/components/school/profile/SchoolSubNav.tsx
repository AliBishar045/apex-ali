import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SchoolSubNavProps {
  sections: { id: string; label: string }[];
}

const SchoolSubNav = ({ sections }: SchoolSubNavProps) => {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 500; // Approximate hero height or use element ref
      setIsSticky(scrollPosition > heroHeight);

      // Determine active section
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // Adjust for sticky nav height + main nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div
      className={cn(
        "w-full bg-background/95 backdrop-blur-sm border-b border-border z-40 transition-all duration-300",
        isSticky ? "fixed top-28 left-0 shadow-md" : "sticky top-0"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar py-4 gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "whitespace-nowrap text-sm font-bold transition-colors hover:text-primary px-3 py-1.5 rounded-full",
                activeSection === section.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolSubNav;
