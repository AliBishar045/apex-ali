import { useEffect } from "react";
import { Phone, MessageSquare, Download } from "lucide-react";
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
import boysImage from "@/assets/boys-formal.jpeg";

const BoysHigh = () => {
  useEffect(() => {
    document.title = "Apex Boys High School - Excellence & Character | Gataka";
    
    // SEO Meta Tags
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Apex Boys High School in Gataka offers premier boarding education with CBC & 8-4-4 curriculum. Fostering academic excellence and character development.');

    // JSON-LD Schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HighSchool",
      "name": "Apex Boys High School",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gataka",
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

  // Combined Staff Data
  const allStaff: SchoolStaff[] = [
    {
      id: "1",
      school_type: "boys",
      name: "Mr. Kamau",
      role: "principal",
      title: "Principal",
      image_url: null,
      is_leadership: true,
    },
    {
      id: "2",
      school_type: "boys",
      name: "Mr. Omondi",
      role: "deputy",
      title: "Deputy Principal",
      image_url: null,
      is_leadership: true,
    },
    {
      id: "3",
      school_type: "boys",
      name: "Mr. Kimani",
      role: "dos",
      title: "Director of Studies",
      image_url: null,
      is_leadership: true,
    },
    {
      id: "4",
      school_type: "boys",
      name: "Mr. Juma",
      role: "hod",
      title: "Head of Mathematics",
      department: "Mathematics",
      image_url: null,
      is_leadership: false,
    },
    {
      id: "5",
      school_type: "boys",
      name: "Mrs. Wanjiku",
      role: "hod",
      title: "Head of Sciences",
      department: "Sciences",
      image_url: null,
      is_leadership: false,
    },
    {
      id: "6",
      school_type: "boys",
      name: "Mr. Ali",
      role: "teacher",
      title: "Teacher",
      subject: "Physics/Maths",
      image_url: null,
      is_leadership: false,
    },
    {
      id: "7",
      school_type: "boys",
      name: "Mr. Otieno",
      role: "teacher",
      title: "Teacher",
      subject: "History/CRE",
      image_url: null,
      is_leadership: false,
    },
  ];

  const facilities: SchoolFacility[] = [
    {
      id: "1",
      school_type: "boys",
      name: "Science Laboratories",
      description: "State-of-the-art physics, chemistry, and biology labs",
      image_url: null,
      category: "academic",
    },
    {
      id: "2",
      school_type: "boys",
      name: "Library",
      description: "Well-stocked library with digital resources",
      image_url: null,
      category: "academic",
    },
    {
      id: "3",
      school_type: "boys",
      name: "Sports Fields",
      description: "Football pitch, basketball court, and athletics track",
      image_url: null,
      category: "sports",
    },
    {
      id: "4",
      school_type: "boys",
      name: "Dormitories",
      description: "Spacious and clean boarding facilities",
      image_url: null,
      category: "boarding",
    },
  ];

  const newsItems = [
    {
      id: "1",
      title: "Annual Science Congress Victory",
      date: "Mar 15, 2024",
      category: "Academics",
      summary: "Our students secured first place in the regional Science and Engineering Fair.",
    },
    {
      id: "2",
      title: "Sports Day Highlights",
      date: "Feb 28, 2024",
      category: "Sports",
      summary: "A thrilling display of talent and sportsmanship at the annual inter-house competitions.",
    },
    {
      id: "3",
      title: "Form 1 Admission Orientation",
      date: "Jan 10, 2024",
      category: "Events",
      summary: "Welcoming our new students to the Apex family with a comprehensive orientation program.",
    },
  ];

  const testimonials = [
    {
      name: "John K.",
      role: "Parent, Form 3 Student",
      content: "The transformation I've seen in my son is remarkable. His discipline and academic focus have improved tremendously.",
      rating: 5,
    },
    {
      name: "Dr. A. Mwangi",
      role: "Alumni, Class of 2018",
      content: "Apex Boys gave me the foundation I needed for my medical career. The teachers went above and beyond.",
      rating: 5,
    },
    {
      name: "Sarah O.",
      role: "Parent, Form 1 Student",
      content: "The boarding facilities are excellent and the pastoral care puts my mind at ease.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <div id="overview">
        <SchoolHero
          name="Apex Boys High School"
          location="Gataka"
          image={boysImage}
          description="A premier boarding school for boys offering CBC and 8-4-4 curriculum with excellent facilities and a focus on academic excellence and character development."
        />
      </div>

      <SchoolSubNav sections={navSections} />

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* Principal Message */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <PrincipalMessage 
            name="Mr. Kamau" 
            title="Principal"
            message={[
              "Welcome to Apex Boys High School, a center of excellence where we nurture young men to become responsible leaders of tomorrow. Our holistic approach to education ensures that every student achieves their full potential.",
              "We believe in discipline, hard work, and spiritual growth as the pillars of success. Our dedicated staff works tirelessly to provide a supportive environment where students can thrive academically and socially.",
              "Join us in this journey of transformation and let us partner with you in shaping the future of your son."
            ]}
          />
        </section>

        {/* Academic Achievements */}
        <section id="academics" className="scroll-mt-32 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <AcademicAchievements />
        </section>

        {/* Unified Staff Section */}
        <section id="staff" className="scroll-mt-32 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Led by a team of experienced and dedicated educationists committed to excellence.
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
              Modern facilities designed to support learning and holistic development.
            </p>
          </div>
          <FacilitiesGallery facilities={facilities} />
        </section>

        {/* News & Events */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <SchoolNews schoolName="Apex Boys" news={newsItems} />
        </section>

        {/* Testimonials */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <SchoolTestimonials testimonials={testimonials} />
        </section>

        {/* Social Connection */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <SocialCTA schoolName="Apex Boys High School" />
        </section>

        {/* Call to Action */}
        <section id="contact" className="scroll-mt-32 bg-primary/5 rounded-3xl p-8 md:p-12 text-center animate-in zoom-in-95 duration-500">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Join Apex Boys High School
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Give your son the gift of quality education and strong character foundation.
            Admissions are ongoing.
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

export default BoysHigh;
