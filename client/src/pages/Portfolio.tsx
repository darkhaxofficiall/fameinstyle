import { useState } from "react";
import { ArrowLeft, ExternalLink, Play, Eye } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Scene3D from "@/components/Scene3D";

const portfolioCategories = [
  "All",
  "Social Media Marketing",
  "Reels Editing", 
  "Website UI/UX",
  "Brand Design",
  "Video Production"
];

const portfolioItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Social Media Campaign - TechStart",
    description: "Complete social media management with 500% engagement increase",
    category: "Social Media Marketing",
    metrics: "500K+ reach, 50K+ engagements",
    tools: ["Instagram", "Facebook", "LinkedIn", "TikTok"]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Viral Reels Series - Fashion Brand",
    description: "10+ viral reels generating 2M+ views and 200K+ followers",
    category: "Reels Editing",
    metrics: "2M+ views, 200K+ followers",
    tools: ["After Effects", "Premiere Pro", "DaVinci"]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "E-commerce Platform - StyleHub",
    description: "Modern e-commerce platform with seamless user experience",
    category: "Website UI/UX",
    metrics: "40% conversion increase",
    tools: ["Figma", "React", "Node.js"]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Complete Brand Identity - InnovateX",
    description: "Full brand identity system with logo, guidelines, and assets",
    category: "Brand Design",
    metrics: "Brand recognition +300%",
    tools: ["Illustrator", "Photoshop", "Figma"]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Product Launch Video - LuxeTech",
    description: "Cinematic product launch video with 1M+ views",
    category: "Video Production",
    metrics: "1M+ views, 95% retention",
    tools: ["Cinema 4D", "After Effects", "Premiere"]
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Instagram Growth Strategy - FitLife",
    description: "Organic growth strategy resulting in 100K+ followers",
    category: "Social Media Marketing",
    metrics: "100K+ followers, 800% engagement",
    tools: ["Instagram", "Analytics", "Canva"]
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1586717791821-3bd7c9999f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "TikTok Viral Campaign - DanceStudio",
    description: "Creative TikTok campaign with trending hashtags",
    category: "Reels Editing",
    metrics: "5M+ views, #1 trending",
    tools: ["TikTok", "CapCut", "After Effects"]
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Mobile App UI - HealthTracker",
    description: "Intuitive mobile app interface with smooth animations",
    category: "Website UI/UX",
    metrics: "4.8★ app store rating",
    tools: ["Figma", "React Native", "Lottie"]
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-black text-white font-inter min-h-screen relative overflow-hidden">
      <Scene3D />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-gold hover:text-gold-light transition-colors mb-6">
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 leading-tight">
              Our Creative <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Discover our award-winning work across social media marketing, reels editing, and UI/UX design
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-charcoal relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-gold text-black"
                    : "glass-morphism text-white hover:bg-opacity-20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl card-hover glass-morphism">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <button className="bg-gold text-black p-3 rounded-full hover:bg-gold-light transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="bg-gold text-black p-3 rounded-full hover:bg-gold-light transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-gold font-semibold text-sm mb-2">Results:</p>
                    <p className="text-sm text-gray-400">{item.metrics}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gold font-semibold text-sm mb-2">Tools Used:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.tools.map((tool) => (
                        <span key={tool} className="bg-gold bg-opacity-20 text-gold px-2 py-1 rounded text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}