import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import HeroSection from "./components/HeroSection"
import WorkForYouSection from "./components/workSection"
import ServicesSection from "./components/Services"
import SpecializationsSection from "./components/Specializations"
import ContactSection from "./components/contactSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <HeroSection />
      <WorkForYouSection />
      <ServicesSection />
      <SpecializationsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

