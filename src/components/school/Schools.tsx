import { motion } from "framer-motion";
import { MapPin, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import boysImage from "@/assets/boys-formal.jpeg";
import girlsImage from "@/assets/girls-admin.jpeg";
import primaryImage from "@/assets/primary-kids.jpg";

const Schools = () => {
  const schools = [
    {
      name: "Apex Boys High School",
      type: "Senior School (Boarding)",
      location: "Gataka",
      image: boysImage,
      link: "/school/boys",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      description:
        "A premier boarding school for boys offering CBC and 8-4-4 curriculum with excellent facilities and a focus on academic excellence and character development.",
      features: ["Full Boarding", "Science Labs", "Sports Facilities", "Library"],
      highlight: "100% KCSE Pass Rate",
    },
    {
      name: "Apex Girls High School",
      type: "Senior & Secondary school",
      location: "South C, Nairobi",
      image: girlsImage,
      link: "/school/girls",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500",
      description:
        "Empowering young women through quality education in a safe and nurturing environment. Focus on academics, Islamic values, and personal development.",
      features: ["Day School", "Modern Classrooms", "Computer Lab", "Safe Environment"],
      highlight: "Top Performing Girls School",
    },
    {
      name: "Apex Junior School",
      type: "Primary School",
      location: "South C Mugoya",
      image: primaryImage,
      link: "/school/junior",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      description:
        "Building strong foundations for young learners through engaging CBC curriculum with emphasis on creativity, critical thinking, and values.",
      features: ["CBC Curriculum", "Play Areas", "Feeding Program", "Transport Available"],
      highlight: "Strong Foundation for Success",
    },
  ];

  return (
    <section id="schools" className="py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -left-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold tracking-wider uppercase mb-4 flex items-center justify-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            Our Campuses
            <Star className="w-4 h-4 fill-current" />
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Three Schools,{" "}
            <span className="text-gradient">One Vision</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Each campus is uniquely designed to cater to different educational 
            needs while maintaining our core values of excellence, integrity, 
            and holistic development.
          </p>
        </motion.div>

        <div className="space-y-20">
          {schools.map((school, index) => (
            <motion.div
              key={index}
              id={school.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Image */}
              <motion.div 
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-card group">
                  <Link to={school.link}>
                    <img
                      src={school.image}
                      alt={school.name}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                      <div className={`w-3 h-3 rounded-full ${school.bgColor}`} />
                      <span className="text-sm font-semibold text-foreground">{school.type}</span>
                    </div>

                    {/* Highlight Badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <p className="text-primary font-bold flex items-center gap-2">
                          <Star className="w-4 h-4 fill-current" />
                          {school.highlight}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                
                {/* Decorative blob */}
                <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br ${school.color} opacity-10 blur-3xl rounded-full`} />
              </motion.div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                  <MapPin className="w-5 h-5" />
                  {school.location}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  {school.name}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {school.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {school.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full ${school.bgColor} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                        <Check className={`w-4 h-4 text-${school.bgColor.split('-')[1]}-600`} />
                      </div>
                      <span className="text-foreground/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  asChild 
                  size="lg"
                  className={`bg-gradient-to-r ${school.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group`}
                >
                  <Link to={school.link}>
                    Explore Campus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schools;
