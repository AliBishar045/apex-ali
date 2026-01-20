import { useEffect } from "react";
import { Trophy, Star, Medal, BookOpen, Phone, MessageSquare, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/school/Navbar";
import Footer from "@/components/school/Footer";
import SchoolHero from "@/components/school/profile/SchoolHero";
import UnifiedStaffSection from "@/components/school/profile/UnifiedStaffSection";
import FacilitiesGallery from "@/components/school/profile/FacilitiesGallery";
import SchoolSubNav from "@/components/school/profile/SchoolSubNav";
import PrincipalMessage from "@/components/school/profile/PrincipalMessage";
import AcademicAchievements from "@/components/school/profile/AcademicAchievements";
import Accreditations from "@/components/school/profile/Accreditations";
import SchoolNews from "@/components/school/profile/SchoolNews";
import SchoolTestimonials from "@/components/school/profile/SchoolTestimonials";
import SocialCTA from "@/components/social/SocialCTA";
import { SchoolStaff, SchoolFacility } from "@/types/school";
import girlsImage from "@/assets/girls-admin.jpeg";

const GirlsHigh = () => {
  useEffect(() => {
    document.title = "Apex Girls High School - South C | Empowering Excellence";
    
    // SEO Meta Tags
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Apex Girls High School in South C offers empowering education for young women, focusing on academic excellence and Islamic values.');

    // JSON-LD Schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HighSchool",
      "name": "Apex Girls High School",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "South C",
        "addressLocality": "Nairobi",
        "addressRegion": "Nairobi",
        "postalCode": "00100",
        "addressCountry": "KE"
      },
      "url": window.location.href,
      "telephone": "+254700000000"
    });
    document.head.appendChild(schemaScript);

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  const navSections = [
    { id: "overview", label: "Overview" },
    { id: "academics", label: "Academics" },
    { id: "staff", label: "Our Team" },
    { id: "facilities", label: "Facilities" },
    { id: "contact", label: "Admissions" },
  ];

  const allStaff: SchoolStaff[] = [
    {
      id: "1",
      school_type: "girls",
      name: "Mrs. Amina",
      role: "principal",
      title: "Principal",
      image_url: null,
      is_leadership: true,
    },
    {
      id: "2",
      school_type: "girls",
      name: "Mrs. Fatima",
      role: "deputy",
      title: "Deputy Principal",
      image_url: null,
      is_leadership: true,
    },
    {
      id: "3",
      school_type: "girls",
      name: "Ms. Sarah",
      role: "dos",
      title: "Director of Studies",
      image_url: null,
      is_leadership: true,
    },
    {
      id: "4",
      school_type: "girls",
      name: "Mrs. Zainab",
      role: "hod",
      title: "Head of Languages",
      department: "Languages",
      image_url: null,
      is_leadership: false,
    },
    {
      id: "5",
      school_type: "girls",
      name: "Ms. Halima",
      role: "hod",
      title: "Head of Humanities",
      department: "Humanities",
      image_url: null,
      is_leadership: false,
    },
    {
      id: "6",
      school_type: "girls",
      name: "Mrs. Khadija",
      role: "teacher",
      title: "Teacher",
      subject: "English/Literature",
      image_url: null,
      is_leadership: false,
    },
    {
      id: "7",
      school_type: "girls",
      name: "Ms. Aisha",
      role: "teacher",
      title: "Teacher",
      subject: "Biology/Chemistry",
      image_url: null,
      is_leadership: false,
    },
  ];

  const facilities: SchoolFacility[] = [
    {
      id: "1",
      school_type: "girls",
      name: "Modern Classrooms",
      description: "Spacious and well-lit learning environments",
      image_url: null,
      category: "academic",
    },
    {
      id: "2",
      school_type: "girls",
      name: "Computer Lab",
      description: "Fully equipped computer laboratory",
      image_url: null,
      category: "academic",
    },
    {
      id: "3",
      school_type: "girls",
      name: "Safe Environment",
      description: "Secure and nurturing compound in South C",
      image_url: null,
      category: "boarding",
    },
  ];

  const newsItems = [
    {
      id: "1",
      title: "Outstanding Academic Results",
      date: "Mar 20, 2024",
      category: "Academics",
      summary: "Girls High School achieved a mean score of 9.89, with top students scoring straight As and the last student scoring a B-.",
    },
    {
      id: "2",
      title: "Cultural Day Celebration",
      date: "Feb 15, 2024",
      category: "Events",
      summary: "A vibrant display of diversity and talent showcasing various cultures within our school community.",
    },
    {
      id: "3",
      title: "Leadership Workshop",
      date: "Jan 25, 2024",
      category: "Academics",
      summary: "Prefects and student leaders attended a weekend workshop on effective leadership skills.",
    },
  ];

  const testimonials = [
    {
      name: "Mrs. Zulekha",
      role: "Parent of Amina (Form 2)",
      content: "I am impressed by the emphasis on moral values alongside academic excellence. My daughter is thriving.",
      rating: 5,
    },
    {
      name: "Dr. Fatuma Ali",
      role: "Alumni, Class of 2020",
      content: "The mentorship program at Apex Girls helped me choose my career path. Forever grateful.",
      rating: 5,
    },
    {
      name: "Mr. Rashid",
      role: "Parent of Mariam (Form 4)",
      content: "The teachers are very approachable and dedicated to seeing every girl succeed.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <div id="overview">
        <SchoolHero
          name="Apex Girls High School"
          location="South C, Nairobi"
          image={girlsImage}
          description="Empowering young women through quality education in a safe and nurturing environment. Focus on academics, Islamic values, and personal development."
        />
      </div>

      <SchoolSubNav sections={navSections} />

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* Principal Message */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <PrincipalMessage 
            name="Mrs. Amina" 
            title="Principal"
            message={[
              "It is my privilege to welcome you to Apex Girls High School. We are dedicated to providing a transformative educational experience that empowers young women to become confident, capable, and compassionate leaders.",
              "Our curriculum is designed to challenge students intellectually while nurturing their spiritual and personal growth. We strive to create an environment where every girl feels valued and supported.",
              "We invite you to be part of our community and witness the remarkable journey of our students as they prepare to make a positive impact in the world."
            ]}
          />
        </section>

        {/* Academic Achievements */}
        <section id="academics" className="scroll-mt-32 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <AcademicAchievements items={[
            {
              title: "KCSE 2025 Mean Score",
              value: "9.89 B+",
              description: "Consistent academic excellence in national exams",
              icon: Trophy,
            },
            {
              title: "University Entry",
              value: "100%",
              description: "Of our students qualify for direct university entry",
              icon: BookOpen,
            },
            {
              title: "National Awards",
              value: "15+",
              description: "Trophies in Science Congress & Drama Festivals",
              icon: Medal,
            },
            {
              title: "Student Satisfaction",
              value: "4.8/5",
              description: "Rated by parents and alumni for holistic growth",
              icon: Star,
            },
          ]} />
        </section>

        {/* Unified Staff Section */}
        <section id="staff" className="scroll-mt-32 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Inspiring leadership fostering a culture of excellence and integrity.
            </p>
          </div>
          <UnifiedStaffSection staff={allStaff} />
        </section>

        {/* Facilities */}
        <section id="facilities" className="scroll-mt-32 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our Facilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Facilities designed for the modern girl child's education.
            </p>
          </div>
          <FacilitiesGallery facilities={facilities} />
        </section>

        {/* News & Events */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <SchoolNews schoolName="Apex Girls" news={newsItems} />
        </section>

        {/* Testimonials */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <SchoolTestimonials testimonials={testimonials} />
        </section>

        {/* Social Connection */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <SocialCTA schoolName="Apex Girls High School" />
        </section>

        {/* Call to Action */}
        <section id="contact" className="scroll-mt-32 bg-primary/5 rounded-3xl p-8 md:p-12 text-center animate-in zoom-in-95 duration-500">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Join Apex Girls High School
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Secure your daughter's future in an environment that values both education and faith.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 min-w-[200px]" asChild>
              <a href="tel:+254700000000">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 min-w-[200px]" asChild>
              <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5" />
                WhatsApp Enquiry
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="gap-2 min-w-[200px]" asChild>
              <a href="#" download>
                <Download className="w-5 h-5" />
                Download Prospectus
              </a>
            </Button>
          </div>
        </section>
      </div>
      
      <Accreditations />
      <Footer />
    </div>
  );
};

export default GirlsHigh;
