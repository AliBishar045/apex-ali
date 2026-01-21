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

import apexHero1 from "@/assets/2.png";
import apexHero2 from "@/assets/1.png";

const Hero = () => {
  // Updated Hero configuration with user-specified images and text position
  const images = [
    { src: apexHero1, alt: "Apex Group of Schools" },
    { src: apexHero2, alt: "Apex Students" },
  ];

  return (
    <section 
      id="home" 
      className="relative w-full mt-[80px] overflow-hidden bg-black"
      style={{ height: 'calc(100vh - 80px)' }}
    >
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
        className="w-full h-full [&>div]:h-full"
      >
        <CarouselContent className="-ml-0 h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0 h-full basis-full bg-black">
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full"
          style={{ 
            objectFit: "fill", 
            width: "100%",
            height: "100%" 
          }}
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

      {/* Centered Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4 bg-black/20">
        <div className="max-w-5xl animate-fade-in-up">
          <h2 className="text-lg md:text-xl font-medium text-white tracking-[0.2em] uppercase mb-4 text-shadow-sm">
            Welcome To
          </h2>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6 text-shadow-lg">
            Apex Group <br />
            <span className="text-white">Of Schools</span>
          </h1>
          <p className="text-white text-lg md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-shadow-md font-light">
            Where excellence meets purpose. Nurturing the next generation of leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button size="lg" className="font-bold text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-md border-none" asChild>
                <a href="#contact">
                  Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
             </Button>
             <Button variant="outline" size="lg" className="font-bold text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-black bg-transparent rounded-md" asChild>
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
