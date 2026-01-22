import { motion } from "framer-motion";
import { CheckCircle2, BookOpen, Users, Award, Sparkles, GraduationCap } from "lucide-react";
import studyingImage from "@/assets/image-wm.png";

const About = () => {
  const highlights = [
    "Holistic education combining academics and character building",
    "Qualified and experienced teaching staff",
    "Modern learning facilities and resources",
    "Focus on both Islamic values and academic excellence",
    "Safe and nurturing environment for all students",
    "Extracurricular activities and sports programs",
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      stat: "100%",
      desc: "Transition rate to higher education",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Dedicated Teachers",
      stat: "50+",
      desc: "Experienced educators committed to student success",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      title: "Excellence",
      stat: "10+",
      desc: "Years of academic excellence",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: GraduationCap,
      title: "Students",
      stat: "500+",
      desc: "Students across 3 campuses",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="about" className="py-28 bg-surface overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src={studyingImage}
                alt="Students studying at Apex School"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <span className="text-4xl font-display font-bold text-primary">10+</span>
              </div>
              <p className="text-sm font-medium text-gray-600 leading-tight">Years of Excellence in Education</p>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute -z-10 -top-8 -left-8 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-primary/20" />
              ))}
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-semibold tracking-wider uppercase mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                About Us
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                Nurturing Tomorrow's{" "}
                <span className="text-gradient">Leaders Today</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                APEX GROUP OF SCHOOLS is dedicated to providing quality education 
                that develops the whole child — intellectually, spiritually, and 
                socially. Our schools combine academic rigor with character 
                development, preparing students for success in higher education 
                and life.
              </p>
            </motion.div>



            {/* Features Grid */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{feature.stat}</p>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{feature.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlights List */}
            <motion.div 
              className="space-y-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1 group-hover:text-primary transition-colors" />
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
