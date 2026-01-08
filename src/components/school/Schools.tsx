import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      description:
        "A premier boarding school for boys offering CBC and 8-4-4 curriculum with excellent facilities and a focus on academic excellence and character development.",
      features: ["Full Boarding", "Science Labs", "Sports Facilities", "Library"],
    },
    {
      name: "Apex Girls High School",
      type: "Senior & Secondary school",
      location: "South C, Nairobi",
      image: girlsImage,
      link: "/school/girls",
      description:
        "Empowering young women through quality education in a safe and nurturing environment. Focus on academics, Islamic values, and personal development.",
      features: ["Day School", "Modern Classrooms", "Computer Lab", "Safe Environment"],
    },
    {
      name: "Apex Junior School",
      type: "Primary School",
      location: "South C Mugoya",
      image: primaryImage,
      link: "/school/junior",
      description:
        "Building strong foundations for young learners through engaging CBC curriculum with emphasis on creativity, critical thinking, and values.",
      features: ["CBC Curriculum", "Play Areas", "Feeding Program", "Transport Available"],
    },
  ];

  return (
    <section id="schools" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase mb-4">
            Our Campuses
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Three Schools,{" "}
            <span className="text-gradient">One Vision</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each campus is uniquely designed to cater to different educational 
            needs while maintaining our core values of excellence, integrity, 
            and holistic development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <div
              key={index}
              id={
                school.name.includes("Boys")
                  ? "school-boys"
                  : school.name.includes("Girls")
                  ? "school-girls"
                  : "school-junior"
              }
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <Link to={school.link} className="block relative h-56 overflow-hidden cursor-pointer">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {school.type}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <Link to={school.link} className="block">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {school.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  {school.location}
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {school.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {school.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-auto space-y-3">
                  <Button className="w-full gap-2" asChild>
                    <Link to={school.link}>
                      View School Profile
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#contact">Enquire Now</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schools;
