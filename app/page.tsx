import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import AmenitiesSection from '@/components/AmenitiesSection';
import LandmarksSection from '@/components/LandmarksSection';
import GallerySection from '@/components/GallerySection';
import CMDSection from '@/components/CMDSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <WhyChooseUs />
      <AmenitiesSection />
      <LandmarksSection />
      <GallerySection />
      <CMDSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
