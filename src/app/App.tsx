import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';
import { SectionDivider } from './components/SectionDivider';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatedSection } from './components/AnimatedSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080C18] cursor-none">
      <LoadingScreen />
      <CursorGlow />
      <ScrollToTop />
      <HeroSection />
      <AnimatedSection>
        <StatsBar />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <WhyChooseMe />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      <Footer />
    </div>
  );
}