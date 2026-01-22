import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import boysHero from "@/assets/boys-hero.jpeg";
import primaryKids from "@/assets/primary-kids.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: primaryKids,
      title: "Welcome To",
      highlight: "Apex Group Of Schools",
      subtitle: "Nurturing the next generation of leaders through holistic education and strong moral values.",
      description: "Where excellence meets purpose. Our schools provide a nurturing environment where every child can discover their potential.",
      badge: "Excellence in Education",
    },
    {
      image: boysHero,
      title: "Empowering",
      highlight: "Future Leaders",
      subtitle: "Quality Education for All",
      description: "We focus on discipline, hard work, and spiritual growth as the pillars of success for every student.",
      badge: "Nurturing Potential",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section 
      id="home" 
      className="relative w-full overflow-hidden bg-black mt-[80px] lg:mt-[116px] xl:mt-[132px] h-[calc(100vh-80px)] lg:h-[calc(100vh-116px)] xl:h-[calc(100vh-132px)]"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) 
            }}
            animate={{ 
              y: [null, Math.random() * -200, null],
              x: [null, Math.random() * 100 - 50, null],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {/* Background Image with Ken Burns effect */}
              <motion.div 
                className="absolute inset-0"
                animate={{ scale: [1, 1.05] }}
                transition={{ duration: 6, ease: "linear" }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Premium overlay pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {slides.map((slide, index) => (
                index === currentSlide && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    {/* Animated Badge */}
                    <motion.div 
                      className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-md border border-yellow-500/40 text-yellow-400 px-5 py-2 rounded-full mb-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-bold tracking-wide uppercase">{slide.badge}</span>
                    </motion.div>
                    
                    <motion.h1 
                      className="text-2xl md:text-3xl font-display text-white/90 mb-2 tracking-widest uppercase"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.div 
                      className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      {slide.highlight}
                    </motion.div>
                    
                    <motion.p 
                      className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4 justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-blue-600/30 transition-all duration-300" asChild>
                        <Link to="/admissions">
                          Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-full transition-all duration-300" asChild>
                        <a href="#schools">Our Schools</a>
                      </Button>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all flex items-center justify-center group hidden md:flex"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all flex items-center justify-center group hidden md:flex"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-2 bg-blue-600"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
