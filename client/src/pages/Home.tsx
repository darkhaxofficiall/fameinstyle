import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Corner3D from "@/components/Corner3D";

export default function Home() {
  return (
    <div className="bg-black text-white font-inter relative overflow-hidden">
      <Corner3D position="top-left" size="medium" />
      <Corner3D position="top-right" size="small" />
      <Corner3D position="bottom-left" size="small" />
      <Corner3D position="bottom-right" size="medium" />
      
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
