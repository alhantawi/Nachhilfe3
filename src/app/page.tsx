import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <HeroSection />
        {/* <CategoriesSection /> */}
        {/* <CoursesSection /> */}
        <StatsSection />
        <FeaturesSection />
        {/*  <TestimonialsSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
