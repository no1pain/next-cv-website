import HeroSection from "./components/home/HeroSection";
import ContactInfoSection from "./components/home/ContactInfoSection";
import ProfileSection from "./components/home/ProfileSection";
import SkillsSection from "./components/home/SkillsSection";
import ExperienceSection from "./components/home/ExperienceSection";
import EducationSection from "./components/home/EducationSection";

export default function Home() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto px-4 py-8">
      <HeroSection />
      <ContactInfoSection />
      <ProfileSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}
