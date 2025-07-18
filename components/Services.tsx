import { Video, TrendingUp, Palette, Smartphone, Monitor, Share2, Check } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Complete social media management from strategy to execution, driving engagement and building loyal communities across all platforms.",
    features: ["Content Strategy", "Community Management", "Paid Social Campaigns", "Influencer Partnerships"]
  },
  {
    icon: Smartphone,
    title: "Reels Editing",
    description: "Expert short-form video editing for Instagram Reels, TikTok, and YouTube Shorts that capture attention and drive viral engagement.",
    features: ["Viral Content Creation", "Trend Integration", "Motion Graphics", "Audio Syncing"]
  },
  {
    icon: Monitor,
    title: "Website UI/UX",
    description: "Modern, user-centered website design and development that converts visitors into customers with seamless experiences.",
    features: ["Responsive Design", "User Research", "Conversion Optimization", "Mobile-First Development"]
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Comprehensive visual identity systems that communicate your brand values and differentiate you in the market.",
    features: ["Logo & Identity", "Brand Guidelines", "Marketing Materials", "Digital Assets"]
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional cinematic content creation, from concept to final delivery, ensuring your brand story captivates audiences.",
    features: ["Commercial Videos", "Brand Documentaries", "Product Videos", "Event Coverage"]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic digital campaigns that maximize ROI and build lasting customer relationships across all platforms.",
    features: ["SEO Optimization", "Paid Advertising", "Email Marketing", "Analytics & Reporting"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Our <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to amplify your brand presence and drive measurable growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="glass-morphism rounded-xl p-8 card-hover animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-gold bg-opacity-20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 animate-pulse">
                  <IconComponent className="text-gold text-2xl w-8 h-8" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center animate-fade-in" style={{animationDelay: `${(index * 0.1) + (featureIndex * 0.1)}s`}}>
                      <Check className="text-gold mr-2 w-4 h-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
