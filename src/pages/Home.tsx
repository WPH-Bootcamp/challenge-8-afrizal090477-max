// src/pages/Home.tsx
import Layout from "../components/layout/Layout";
import HeroSection from "../components/sections/HeroSection";
import LogoCloudSection from "../components/sections/TrustBySection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";
import OurProcessSection from "../components/sections/OurProcessSection";
import IndustrySection from "../components/sections/IndustrySection";
import PortfolioSection from "../components/sections/PortofolioSection";
import FAQSection from "../components/sections/FAQSection";

const Home = () => {
  return (
    <Layout>
      <>
        <HeroSection />
        <LogoCloudSection />
        <AboutSection />
        <OurProcessSection />
        <ServicesSection />
        <IndustrySection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </>
    </Layout>
  );
};

export default Home;