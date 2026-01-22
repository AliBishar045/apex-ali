import { BookOpen, Heart, Trophy, Users, GraduationCap, Star } from "lucide-react";
import { motion } from "framer-motion";
import religionImg1 from "@/assets/religion-1.jpg";
import religionImg2 from "@/assets/religion-2.jpg";
import sportsImg from "@/assets/sports.jpg";
import teachersImg from "@/assets/teachers.jpg";
import dosImage from "@/assets/dos-boys.jpeg";
import deputyImage from "@/assets/depa.JPG";
import mathsTeacherImage from "@/assets/maths-teacher.jpeg";
import physicsTeacherImage from "@/assets/physics-teacher-boys.jpeg";

const Programs = () => {
  const staff = [
    {
      name: "Mr. Benedict",
      role: "Deputy Principal",
      image: deputyImage,
    },
    {
      name: "Mr. Macharia",
      role: "Director of Studies",
      image: dosImage,
    },
    {
      name: "Mr. Albert",
      role: "Head of Mathematics",
      image: mathsTeacherImage,
    },
    {
      name: "Mr. Ali",
      role: "Physics/Maths Teacher",
      image: physicsTeacherImage,
    },
  ];

  const programs = [
    {
      title: "Islamic Education",
      icon: Heart,
      description:
        "Our students receive comprehensive Islamic education, nurturing their spiritual growth and moral values. We integrate Quran recitation, Islamic studies, and character development into our daily curriculum.",
      images: [religionImg1, religionImg2],
      features: ["Daily Quran Classes", "Islamic Studies", "Character Building", "Moral Values"],
    },
    {
      title: "Sports & Physical Education",
      icon: Trophy,
      description:
        "We believe in developing well-rounded individuals through sports and physical activities. Our students participate in various sports including basketball, football, athletics, and more.",
      images: [sportsImg],
      features: ["Basketball", "Football", "Athletics", "Team Sports"],
    },
    {
      title: "Dedicated Teachers",
      icon: Users,
      description:
        "Our highly qualified and passionate teaching staff are committed to providing quality education. They go beyond textbooks to inspire, guide, and mentor each student towards excellence.",
      images: [teachersImg],
      features: ["Qualified Staff", "Continuous Training", "Mentorship", "Student Support"],
    },
  ];

  return (
    <section id="programs" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase mb-4">
            Our Programs
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Holistic Education for{" "}
            <span className="text-gradient">Every Child</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At APEX GROUP OF SCHOOLS, we go beyond academics to nurture the spiritual, 
            physical, and social development of every student.
          </p>
        </div>

        <div className="space-y-20">
          {programs.map((program, index) => {
            if (program.title === "Dedicated Teachers") {
              return (
                <div key={index} className="w-full py-8">
                  <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-3xl font-display font-bold text-foreground">{program.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-8 text-lg">{program.description}</p>
                    <div className="flex flex-wrap justify-center gap-6">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                          <Star className="w-4 h-4 text-primary fill-primary" />
                          <span className="text-foreground text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {staff.map((member, idx) => (
                      <motion.div 
                        key={idx}
                        className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="aspect-[4/5] overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <p className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{member.name}</p>
                            <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{member.role}</p>
                          </div>
                        </div>
                        <div className="p-4 text-center group-hover:hidden">
                          <h4 className="font-bold text-foreground text-lg">{member.name}</h4>
                          <p className="text-sm text-primary font-medium">{member.role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className="flex flex-col gap-8">
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-primary fill-primary" />
                          <span className="text-foreground text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Images */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    {program.images.length === 2 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {program.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative rounded-2xl overflow-hidden shadow-card group"
                          >
                            <img
                              src={img}
                              alt={`${program.title} ${idx + 1}`}
                              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="relative rounded-2xl overflow-hidden shadow-card group">
                        <img
                          src={program.images[0]}
                          alt={program.title}
                          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "CBC & 8-4-4 Curriculum",
              description: "We offer both the new Competency Based Curriculum and the traditional 8-4-4 system.",
            },
            {
              icon: GraduationCap,
              title: "Academic Excellence",
              description: "Our students consistently achieve excellent results in national examinations.",
            },
            {
              icon: Heart,
              title: "Values-Based Learning",
              description: "We integrate strong moral and Islamic values into all aspects of education.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-display font-bold text-lg text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
