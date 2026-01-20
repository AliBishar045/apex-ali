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

import primaryKids from "@/assets/primary-kids.jpg";
import boysGroup from "@/assets/boys-group.jpeg";
import studentsGroup1 from "@/assets/students-group1.jpeg";
import studentsGroup2 from "@/assets/students-group2.jpeg";
import girlsClassroom from "@/assets/girls-classroom.jpeg";
import boysStudying from "@/assets/boys-studying.jpeg";

const Hero = () => {
  // Carousel configuration for Hero section
  const images = [
    { src: boysGroup, alt: "Apex Students Group" },
    { src: studentsGroup1, alt: "Apex Students Learning" },
    { src: studentsGroup2, alt: "Apex Senior Students" },
    { src: girlsClassroom, alt: "Girls Classroom Session" },
    { src: primaryKids, alt: "Apex Primary School" },
    { src: boysStudying, alt: "Students Studying" },
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
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center"
                />
                {/* No overlay for clearer images */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <div className="hidden md:block">
            <CarouselPrevious className="left-4 w-12 h-12 border-none bg-white/20 hover:bg-white/40 text-white" />
            <CarouselNext className="right-4 w-12 h-12 border-none bg-white/20 hover:bg-white/40 text-white" />
        </div>
      </Carousel>

      {/* Floating White Card Overlay */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-20 max-w-xl w-[90%] md:w-auto z-20">
        <div className="bg-white/95 backdrop-blur-sm p-6 md:p-10 rounded-sm shadow-2xl animate-fade-in border-l-4 border-primary">
          <h2 className="text-lg font-medium text-primary mb-2 tracking-wide uppercase">
            Welcome To
          </h2>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            Apex Group <br />
            <span className="text-primary">Of Schools</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Where excellence meets purpose. Nurturing the next generation of leaders through holistic education, discipline, and character development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <Button size="lg" className="font-bold text-base px-8 shadow-lg hover:translate-y-[-2px] transition-transform" asChild>
                <a href="#contact">
                  Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
             </Button>
             <Button variant="outline" size="lg" className="font-bold text-base px-8 border-2 hover:bg-muted/50" asChild>
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
