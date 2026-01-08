import { useState } from "react";
import { Menu, X, Phone, GraduationCap, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/apex-logo.jpg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { trackSocialClick } from "@/lib/analytics";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleSocialClick = (platform: string) => {
    trackSocialClick(platform, "Navbar");
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    {
      label: "Our Schools",
      href: "#schools",
      children: [
        {
          title: "Apex Boys High School",
          href: "/school/boys",
          description: "Senior School (Boarding) - Excellence & Character",
        },
        {
          title: "Apex Girls High School",
          href: "/school/girls",
          description: "Senior School (Boarding) - Empowering Future Leaders",
        },
        {
          title: "Apex Junior School",
          href: "/school/junior",
          description: "CBC & 8-4-4 System - Foundation for Success",
        },
      ],
    },
    { label: "Programs", href: "#programs" },
    { label: "News", href: "#news" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar - Hidden on mobile, visible on lg+ */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2 px-6 text-sm font-medium">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+254720253298" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+254 720 253 298</span>
            </a>
            <a href="mailto:info@apexschools.ac.ke" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@apexschools.ac.ke</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Nairobi, Kenya</span>
            </span>
            <div className="w-px h-4 bg-primary-foreground/30 mx-2" />
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/p/Apex-Group-Of-Schools-KE-100079193852877/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white/80 transition-colors" 
                aria-label="Facebook"
                onClick={() => handleSocialClick("Facebook")}
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/apexschool_ke/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white/80 transition-colors" 
                aria-label="Instagram"
                onClick={() => handleSocialClick("Instagram")}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white/80 transition-colors" 
                aria-label="YouTube"
                onClick={() => handleSocialClick("YouTube")}
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="w-full px-4 sm:px-6 2xl:px-12">
          <div className="flex items-center justify-between h-20 xl:h-24">
            {/* Logo Section */}
            <a href={isHome ? "#home" : "/"} className="flex items-center gap-3 sm:gap-4 min-w-fit">
              <img src={logo} alt="Apex School Logo" className="h-12 sm:h-16 w-auto" />
              <div className="flex flex-col justify-center">
                <p className="font-display font-extrabold text-primary text-lg sm:text-2xl xl:text-3xl leading-none tracking-tight">
                  APEX GROUP
                </p>
                <p className="text-xs sm:text-sm xl:text-base text-primary/80 font-bold tracking-wide">
                  OF SCHOOLS
                </p>
              </div>
            </a>

            {/* Desktop Navigation - Hidden on lg (tablet/small laptop), visible on xl */}
            <div className="hidden xl:flex items-center justify-center flex-1 px-8">
              <NavigationMenu>
                <NavigationMenuList className="gap-2 2xl:gap-6">
                  {navLinks.map((link) => (
                    <NavigationMenuItem key={link.label}>
                      {link.children ? (
                        <>
                          <NavigationMenuTrigger 
                            className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent text-foreground hover:text-primary font-bold text-base 2xl:text-lg h-auto p-2"
                          >
                            {link.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] bg-popover rounded-md shadow-md">
                              {link.children.map((child) => (
                                <ListItem
                                  key={child.title}
                                  title={child.title}
                                  href={child.href}
                                >
                                  {child.description}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <a
                            href={isHome ? link.href : `/${link.href}`}
                            className={cn(
                              "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-2 py-2 text-base 2xl:text-lg font-bold transition-colors hover:text-primary text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            )}
                          >
                            {link.label}
                          </a>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop CTA - Only Apply Now button to save space */}
            <div className="hidden xl:flex items-center gap-4 min-w-fit">
              <Button size="lg" className="font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all" asChild>
                <Link to="/admissions">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Apply Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle - Visible on lg and below */}
            <button
              className="xl:hidden text-primary p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="xl:hidden py-4 border-t border-border animate-fade-in bg-background/95 backdrop-blur-md max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col border-b border-border/50 pb-2 last:border-0">
                  {link.children ? (
                    <>
                      <div className="text-foreground font-bold text-lg py-2">
                        {link.label}
                      </div>
                      <div className="pl-4 flex flex-col gap-3 border-l-2 border-primary/20 ml-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.title}
                            to={child.href}
                            className="text-muted-foreground hover:text-primary transition-colors font-medium text-base py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={isHome ? link.href : `/${link.href}`}
                      className="text-foreground hover:text-primary transition-colors font-bold text-lg py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-4 pb-8">
                <Button variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary/5" asChild>
                  <a href="tel:+254720253298">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us
                  </a>
                </Button>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90" asChild>
                  <Link to="/admissions">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-foreground">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
