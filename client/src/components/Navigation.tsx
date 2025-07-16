import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-lg border-b border-gold border-opacity-20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-montserrat font-bold text-gradient">Fame & Style</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-gold transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-gold transition-colors duration-200 font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-white hover:text-gold transition-colors duration-200 font-medium"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-gold transition-colors duration-200 font-medium"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gold text-black px-6 py-2 rounded-lg font-semibold hover:bg-gold-light transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-95">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-white hover:text-gold transition-colors duration-200 font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-white hover:text-gold transition-colors duration-200 font-medium py-2"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block text-white hover:text-gold transition-colors duration-200 font-medium py-2"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-white hover:text-gold transition-colors duration-200 font-medium py-2"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block bg-gold text-black px-6 py-2 rounded-lg font-semibold hover:bg-gold-light transition-colors duration-200 mt-4"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
