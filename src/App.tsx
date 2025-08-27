import { Hero } from "@/sections/Hero";
import { ShowscaeSection } from "@/sections/ShowscaeSection";
import { NavBar } from "@/components/NavBar";
import { LogoShowcase } from "@/sections/LogoShowcase";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { TechStack } from "@/sections/TechStack";
import FeatureCards from "@/sections/FeatureCards";
import { Testimonials } from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from '@/sections/Footer';

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ShowscaeSection />
      <LogoShowcase />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
