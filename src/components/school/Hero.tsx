import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import apexHero from "@/assets/apex-hero.png";
import apexHero2 from "@/assets/apex-hero-2.png";

const Hero = () => {
  // Carousel configuration for Hero section
  const images = [
    { src: apexHero, alt: "Apex Group of Schools" },
    { src: apexHero2, alt: "Apex Students" },
  ];

  return (
    <section id="home" className="relative w-full h-[95vh] mt-[80px] overflow-hidden">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="-ml-0 h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0 h-full basis-full">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-black/20 z-10" /> {/* Subtle overlay for text readability */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <div className="hidden md:block z-30 relative">
            <CarouselPrevious className="left-4 w-12 h-12 border-none bg-white/20 hover:bg-white/40 text-white" />
            <CarouselNext className="right-4 w-12 h-12 border-none bg-white/20 hover:bg-white/40 text-white" />
        </div>
      </Carousel>

      {/* Bottom Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center z-20 pb-16 md:pb-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="max-w-4xl animate-fade-in-up px-4">
          <h2 className="text-lg md:text-xl font-medium text-white/90 mb-3 tracking-[0.2em] uppercase text-shadow-sm">
            Welcome To
          </h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-4 text-shadow-lg">
            Apex Group <br />
            <span className="text-primary-foreground">Of Schools</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed text-shadow-sm font-light">
            Where excellence meets purpose. Nurturing the next generation of leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button size="lg" className="font-bold text-base px-8 shadow-xl hover:scale-105 transition-transform bg-primary hover:bg-primary/90 text-white border-none" asChild>
                <a href="#contact">
                  Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
             </Button>
             <Button variant="outline" size="lg" className="font-bold text-base px-8 border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10" asChild>
                <a href="#schools">
                  Our Schools
                </a>
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
