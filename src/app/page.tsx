import HeroSection from "./components/home/HeroSection";
import ContactInfoSection from "./components/home/ContactInfoSection";
import ProfileSection from "./components/home/ProfileSection";
import SkillsSection from "./components/home/SkillsSection";
import ExperienceSection from "./components/home/ExperienceSection";
import EducationSection from "./components/home/EducationSection";

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <ContactInfoSection />
      <ProfileSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}
