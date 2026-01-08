import Navbar from "@/components/school/Navbar";
import Hero from "@/components/school/Hero";
import About from "@/components/school/About";
import Schools from "@/components/school/Schools";
import Programs from "@/components/school/Programs";
import StatsCounter from "@/components/school/StatsCounter";
import NewsEvents from "@/components/school/NewsEvents";
import SocialMediaFeeds from "@/components/social/SocialMediaFeeds";
import Testimonials from "@/components/school/Testimonials";
import Gallery from "@/components/school/Gallery";
import Contact from "@/components/school/Contact";
import Footer from "@/components/school/Footer";
import Sitemap from "@/components/school/Sitemap";
import WhatsAppButton from "@/components/school/WhatsAppButton";
import ScrollToTop from "@/components/school/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
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
