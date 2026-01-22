import { motion } from "framer-motion";
import { BookOpen, Trophy, Heart, Laptop, Users, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import sportsImg from "@/assets/sports.jpg";
import religionImg from "@/assets/religion-1.jpg";
import teachersImg from "@/assets/teachers.jpg";
import studentsImg from "@/assets/boys-studying.jpeg";
import groupImg from "@/assets/students-group1.jpeg";
import trophyImg from "@/assets/boys-trophy.jpeg";

const Pillars = () => {
  const pillars = [
    {
      title: "Academic Excellence",
      icon: BookOpen,
      image: studentsImg,
      description: "We offer both CBC and 8-4-4 curriculum, providing a solid academic foundation that prepares students for national examinations and beyond. Our commitment to excellence is reflected in our students' outstanding results.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Sports & Talents",
      icon: Trophy,
      image: sportsImg,
      description: "APEX Schools is intentional about developing sporting and talent capabilities of our students. We provide a wide range of sports and extracurricular activities including basketball, football, athletics, and more.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Spiritual Growth",
      icon: Heart,
      image: religionImg,
      description: "The holistic transformation of each child is our focus. We integrate strong Islamic values into our curriculum, nurturing moral character and guiding students towards becoming upright individuals.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
    },
    {
      title: "Digital Literacy",
      icon: Laptop,
      image: teachersImg,
      description: "Digital literacy is crucial in today's world. We equip our students with essential digital skills, critical thinking, and creativity through our modern computer labs and technology-integrated learning.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Community & Leadership",
      icon: Users,
      image: groupImg,
      description: "We foster strong community bonds and develop leadership skills through group activities, student councils, and community outreach programs that shape responsible citizens.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
    },
    {
      title: "Arts & Culture",
      icon: Palette,
      image: trophyImg,
      description: "From drama and music to cultural festivals, we provide platforms for students to explore and express their creative talents, building confidence and cultural appreciation.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="pillars" className="py-28 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-primary font-semibold tracking-wider uppercase mb-4 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-8 h-px bg-primary" />
            Our Pillars
            <span className="w-8 h-px bg-primary" />
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            The Foundation of{" "}
            <span className="text-gradient">APEX Education</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            At APEX GROUP OF SCHOOLS, our educational approach is built on six core pillars 
            that ensure holistic development of every student — academically, spiritually, 
            physically, and socially.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-card transition-all duration-500"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                
                {/* Icon Badge */}
                <motion.div 
                  className={`absolute bottom-4 left-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <pillar.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Our comprehensive approach ensures that every student receives a well-rounded 
            education that prepares them for success in all aspects of life.
          </p>
          <Button size="lg" className="shadow-glow hover:shadow-xl transition-shadow" asChild>
            <a href="#programs">Explore Our Programs</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pillars;
