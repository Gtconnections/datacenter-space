import MotionRoot from "@/components/MotionRoot";
import CosmicBackground from "@/components/CosmicBackground";
import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Vision, Tech, How, Tokenization, Stats } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <MotionRoot />
      <CosmicBackground />
      <Starfield />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Vision />
        <Tech />
        <Stats />
        <How />
        <Tokenization />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
