import { CreatorBenefits } from "@/components/home/CreatorBenefits";
import { CreatorCTA } from "@/components/home/CreatorCTA";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { GrowthSection } from "@/components/home/GrowthSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LearningPaths } from "@/components/home/LearningPaths";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { CourseExplorerProvider } from "@/components/course/CourseExplorerProvider";

export default function HomePage() {
  return (
    <CourseExplorerProvider>
      <main>
        <HeroSection />
        <PartnerLogos />
        <FeaturedCourses />
        <LearningPaths />
        <GrowthSection />
        <CreatorBenefits />
        <CreatorCTA />
        <Testimonials />
        <Footer />
      </main>
    </CourseExplorerProvider>
  );
}
