import ExpertiseSection from "../components/home/expertise/ExpertiseSection";
import FocusSection from "../components/home/focus/FocusSection";
import Hero from "../components/home/hero/Hero";
import PortfolioSection from "../components/home/portfolio-preview/PortfolioSection";
import StrategicRevolution from "../components/home/revolution/StrategicRevolution";
import ServicesSection from "../components/home/services-preview/ServicesSection";
import TestimonialsSection from "../components/home/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <FocusSection />
      <ExpertiseSection />
      <PortfolioSection />
      <TestimonialsSection />
      <StrategicRevolution />
    </div>
  );
}
