import { Camera } from "lucide-react";
import boysHero from "@/assets/boys-hero.jpeg";
import boysTrophy from "@/assets/boys-trophy.jpeg";
import boysGroup from "@/assets/boys-group.jpeg";
import boysStudying from "@/assets/boys-studying.jpeg";
import boysFormal from "@/assets/boys-formal.jpeg";
import girlsClassroom from "@/assets/girls-classroom.jpeg";
import girlsAdmin from "@/assets/girls-admin.jpeg";
import studentsGroup1 from "@/assets/students-group1.jpeg";
import studentsGroup2 from "@/assets/students-group2.jpeg";
import primaryKids from "@/assets/primary-kids.jpg";
import sportsImg from "@/assets/sports.jpg";
import teachersImg from "@/assets/teachers.jpg";
import instagramReel from "@/assets/video-main.mp4";

const Gallery = () => {
  const images = [
    { src: boysHero, alt: "Apex Boys High School", caption: "Boys High School Campus" },
    { src: girlsClassroom, alt: "Girls in Classroom", caption: "Girls Classroom Session" },
    { src: boysTrophy, alt: "Boys with Trophy", caption: "Sports Achievement" },
    { src: girlsAdmin, alt: "Girls at Admin Block", caption: "Girls School" },
    { src: boysStudying, alt: "Students Studying", caption: "Study Session" },
    { src: primaryKids, alt: "Primary Students", caption: "Junior School Cultural Day" },
    { src: boysFormal, alt: "Boys Formal Photo", caption: "Boys High School Students" },
    { src: sportsImg, alt: "Sports Activities", caption: "Sports & Athletics" },
    { src: teachersImg, alt: "Teaching Staff", caption: "Our Dedicated Teachers" },
    { src: studentsGroup1, alt: "Students Group Photo", caption: "Class Photo" },
    { src: boysGroup, alt: "Boys Group", caption: "Boys Assembly" },
    { src: studentsGroup2, alt: "Students Standing", caption: "Senior Students" },
  ];

  return (
    <section id="gallery" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Camera className="w-4 h-4" />
            <span className="text-sm font-semibold">Photo Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Life at{" "}
            <span className="text-gradient">APEX Schools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our vibrant school community, academic activities, 
            and memorable moments.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-border">
            <video
              src={instagramReel}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls
              poster="/placeholder.svg"
              className="w-full h-[600px] object-contain bg-black"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Masonry-style Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative break-inside-avoid rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground font-semibold text-base">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
