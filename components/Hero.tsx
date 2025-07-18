import { ChevronDown } from "lucide-react";
import Scene3D from "./Scene3D";

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      <Scene3D />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight animate-slide-in-left">
          Transform Your Brand with 
          <span className="text-gradient animate-pulse-glow"> Fame & Style</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light animate-slide-in-right">
          Premium social media marketing, viral reels editing, and stunning UI/UX design that elevates your digital presence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
          <button 
            onClick={scrollToServices}
            className="bg-gold text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-all duration-200 animate-glow"
          >
            Start Your Project
          </button>
          <button 
            onClick={scrollToPortfolio}
            className="glass-morphism text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-20 transition-all duration-200"
          >
            View Our Work
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gold text-2xl" />
      </div>
    </section>
  );
}
