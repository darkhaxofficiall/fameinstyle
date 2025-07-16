import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white font-inter">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}
