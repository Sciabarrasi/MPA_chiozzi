import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/workSection";
import ServicesSection from "./components/Services";
import SpecializationsSection from "./components/Specializations";
import ContactSection from "./components/contactSection";
import WhatsAppButton from "./components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <SpecializationsSection />
      <ContactSection />
      <WhatsAppButton
        phoneNumber="(+ 54 9 3404) 653267"
        message="Hola, quisiera discutir mi próximo proyecto con ustedes !"
      />
      <Footer />
    </div>
  );
}
