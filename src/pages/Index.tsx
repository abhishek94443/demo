import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CoursesSection from "@/components/CoursesSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import AnswerKeysSection from "@/components/AnswerKeysSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FrontBanner from "@/components/frontbanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FrontBanner/>
        <HeroSection />
        <StatsSection />
        <CoursesSection />
        <AnnouncementsSection />
        <AnswerKeysSection />
        <ResultsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
