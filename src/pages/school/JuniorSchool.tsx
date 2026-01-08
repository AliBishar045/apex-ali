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
import primaryImage from "@/assets/primary-kids.jpg";

const JuniorSchool = () => {
  useEffect(() => {
    document.title = "Apex Junior School - South C | Foundation for Success";
    
    // SEO Meta Tags
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Apex Junior School in South C offers a strong foundation for young learners with CBC curriculum, creativity, and values.');

    // JSON-LD Schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ElementarySchool",
      "name": "Apex Junior School",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "South C Mugoya",
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
      school_type: "junior",
      name: "Mrs. Mary",
      role: "head_teacher",
      title: "Head Teacher",
      image_url: null,
      is_leadership: true,
    },
    {
      id: "2",
      school_type: "junior",
      name: "Mr. John",
      role: "deputy",
      title: "Deputy Head Teacher",
      image_url: null,
      is_leadership: true,
    },
    {
      id: "3",
      school_type: "junior",
      name: "Tr. Alice",
      role: "teacher",
      title: "Class Teacher",
      subject: "Grade 1",
      image_url: null,
      is_leadership: false,
    },
    {
      id: "4",
      school_type: "junior",
      name: "Tr. Bob",
      role: "teacher",
      title: "Class Teacher",
      subject: "Grade 2",
      image_url: null,
      is_leadership: false,
    },
    {
      id: "5",
      school_type: "junior",
      name: "Tr. Carol",
      role: "teacher",
      title: "Class Teacher",
      subject: "Grade 3",
      image_url: null,
      is_leadership: false,
    },
    {
      id: "6",
      school_type: "junior",
      name: "Tr. David",
      role: "teacher",
      title: "Class Teacher",
      subject: "Grade 4",
      image_url: null,
      is_leadership: false,
    },
  ];

  const facilities: SchoolFacility[] = [
    {
      id: "1",
      school_type: "junior",
      name: "Play Areas",
      description: "Safe and fun playgrounds for children",
      image_url: null,
      category: "sports",
    },
    {
      id: "2",
      school_type: "junior",
      name: "Classrooms",
      description: "Bright, colorful, and child-friendly classrooms",
      image_url: null,
      category: "academic",
    },
    {
      id: "3",
      school_type: "junior",
      name: "Feeding Program",
      description: "Nutritious meals provided daily",
      image_url: null,
      category: "boarding",
    },
    {
      id: "4",
      school_type: "junior",
      name: "Transport Services",
      description: "Reliable school transport available",
      image_url: null,
      category: "boarding",
    },
  ];

  const newsItems = [
    {
      id: "1",
      title: "Kindergarten Graduation",
      date: "Nov 25, 2023",
      category: "Events",
      summary: "Celebrating our little graduates as they transition to Grade 1 with a colorful ceremony.",
    },
    {
      id: "2",
      title: "Art & Craft Exhibition",
      date: "Oct 12, 2023",
      category: "Academics",
      summary: "Showcasing the incredible creativity and artistic talents of our young learners.",
    },
    {
      id: "3",
      title: "Swimming Gala",
      date: "Sep 30, 2023",
      category: "Sports",
      summary: "A fun-filled day at the pool with parents cheering on our budding swimmers.",
    },
  ];

  const testimonials = [
    {
      name: "Mama Ryan",
      role: "Parent, Grade 2",
      content: "My son loves going to school every day. The teachers are so caring and patient.",
      rating: 5,
    },
    {
      name: "Mr. Otieno",
      role: "Parent, Grade 5",
      content: "The CBC implementation here is excellent. I can see my daughter developing real-life skills.",
      rating: 5,
    },
    {
      name: "Mrs. Patel",
      role: "Parent, PP2",
      content: "The multicultural environment is wonderful. My child is learning to respect and appreciate diversity.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <div id="overview">
        <SchoolHero
          name="Apex Junior School"
          location="South C Mugoya"
          image={primaryImage}
          description="Building strong foundations for young learners through engaging CBC curriculum with emphasis on creativity, critical thinking, and values."
        />
      </div>

      <SchoolSubNav sections={navSections} />

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* Principal Message */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <PrincipalMessage 
            name="Mrs. Mary" 
            title="Head Teacher"
            message={[
              "Welcome to Apex Junior School, where every child is special and every milestone is celebrated. We provide a warm, stimulating environment that fosters a love for learning from the very start.",
              "Our child-centered approach ensures that each learner receives the attention they need to grow socially, emotionally, and academically. We partner with parents to build a strong foundation for future success.",
              "We look forward to welcoming your family into our vibrant school community."
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
              Caring leaders dedicated to early childhood development and primary education.
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
              A stimulating environment designed for young explorers.
            </p>
          </div>
          <FacilitiesGallery facilities={facilities} />
        </section>

        {/* News & Events */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <SchoolNews schoolName="Apex Junior" news={newsItems} />
        </section>

        {/* Testimonials */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <SchoolTestimonials testimonials={testimonials} />
        </section>

        {/* Social Connection */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <SocialCTA schoolName="Apex Junior School" />
        </section>

        {/* Call to Action */}
        <section id="contact" className="scroll-mt-32 bg-primary/5 rounded-3xl p-8 md:p-12 text-center animate-in zoom-in-95 duration-500">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Join Apex Junior School
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Start your child's journey of excellence with us.
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

export default JuniorSchool;
