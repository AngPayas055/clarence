import Header from "./components/landing/header";
import HeroSection from "./components/landing/HeroSection";
import StatsSection from "./components/landing/StatsSection";
import ExperienceSection from "./components/landing/ExperienceSection";
import EducationCredentialsSection from "./components/landing/EducationCredentialsSection";
import SkillsSection from "./components/landing/SkillsSection";
import AdvocacySection from "./components/landing/AdvocacySection";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f3ea] text-[#071b38]">
      <Header />
      <HeroSection />
      <StatsSection />
      <ExperienceSection />
      <EducationCredentialsSection />
      <SkillsSection />
      <AdvocacySection />
      <Footer />
    </main>
  );
}