import { CategoriesSection } from "@/components/CategoriesSection";
import { CoursesSection } from "@/components/CoursesSection";
import { CTASection } from "@/components/CTASection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

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
