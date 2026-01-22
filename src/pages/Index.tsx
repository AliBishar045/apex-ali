import Navbar from "@/components/school/Navbar";
import Hero from "@/components/school/Hero";
import About from "@/components/school/About";
import HeadTeacherMessage from "@/components/school/HeadTeacherMessage";
import MissionVision from "@/components/school/MissionVision";
import Pillars from "@/components/school/Pillars";
import Schools from "@/components/school/Schools";
import Programs from "@/components/school/Programs";
import StatsCounter from "@/components/school/StatsCounter";
import NewsEvents from "@/components/school/NewsEvents";
import SocialMediaFeeds from "@/components/social/SocialMediaFeeds";
import Testimonials from "@/components/school/Testimonials";
import Gallery from "@/components/school/Gallery";
import Contact from "@/components/school/Contact";
import Sitemap from "@/components/school/Sitemap";
import Footer from "@/components/school/Footer";
import WhatsAppButton from "@/components/school/WhatsAppButton";
import ScrollToTop from "@/components/school/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Pillars />
      <Schools />
      <StatsCounter />
      <Programs />
      <NewsEvents />
      <SocialMediaFeeds />
      <Testimonials />
      <Gallery />
      <Contact />
      <Sitemap />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
