import { motion } from "framer-motion";
import { Target, Eye, Gem, Users, Award, Heart, Star } from "lucide-react";
import studentsImage from "@/assets/boys-formal.jpeg";

const MissionVision = () => {
  const values = [
    { icon: Award, title: "Excellence", desc: "Striving for the highest standards in all we do" },
    { icon: Heart, title: "Integrity", desc: "Upholding honesty and strong moral principles" },
    { icon: Users, title: "Community", desc: "Building a supportive learning environment" },
    { icon: Gem, title: "Innovation", desc: "Embracing modern teaching methodologies" },
  ];

  return (
    <section className="py-28 bg-primary relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/3 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            scale: [0.8, 1.2, 0.8],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 3 + i * 0.5, 
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          <Star className="w-4 h-4 text-white/20 fill-current" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.p 
              className="text-primary-foreground/80 font-semibold tracking-wider uppercase mb-4 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-8 h-px bg-primary-foreground/50" />
              Who We Are
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-10">
              Transforming Students into Leaders of Purpose
            </h2>

            {/* Mission & Vision Cards */}
            <div className="space-y-6 mb-10">
              <motion.div 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/20 hover:bg-white/15 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-start gap-5">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Target className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary-foreground mb-3">
                      Our Mission
                    </h3>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      To provide quality, holistic education that develops the whole child — 
                      intellectually, spiritually, and socially — preparing them to be 
                      responsible citizens and future leaders.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/20 hover:bg-white/15 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-start gap-5">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Eye className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary-foreground mb-3">
                      Our Vision
                    </h3>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      To be the leading educational institution in Kenya, known for academic 
                      excellence, strong moral values, and producing well-rounded graduates 
                      who make positive contributions to society.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Core Values */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/15 transition-all cursor-pointer group"
                  whileHover={{ scale: 1.05, x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <value.icon className="w-5 h-5 text-secondary" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-primary-foreground text-sm group-hover:text-secondary transition-colors">{value.title}</p>
                    <p className="text-primary-foreground/60 text-xs">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={studentsImage}
                alt="APEX Students"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </motion.div>
            
            {/* Floating Stats */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-card rounded-2xl p-6 shadow-card border border-border hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: -3 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-4xl font-display font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground font-medium">Years of Excellence</p>
            </motion.div>
            
            <motion.div 
              className="absolute -top-8 -right-8 bg-secondary rounded-2xl p-6 shadow-card hidden md:block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <p className="text-4xl font-display font-bold text-secondary-foreground">100%</p>
              <p className="text-sm text-secondary-foreground/80 font-medium">Parent Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
