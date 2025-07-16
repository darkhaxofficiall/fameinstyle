import { Video, TrendingUp, Palette, Camera, Code, Megaphone, Check } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Production",
    description: "Professional cinematic content creation, from concept to final delivery, ensuring your brand story captivates audiences.",
    features: ["Commercial Videos", "Brand Documentaries", "Social Media Content"]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic digital campaigns that maximize ROI and build lasting customer relationships across all platforms.",
    features: ["Social Media Strategy", "Paid Advertising", "Content Marketing"]
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Comprehensive visual identity systems that communicate your brand values and differentiate you in the market.",
    features: ["Logo & Identity", "Brand Guidelines", "Marketing Materials"]
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography services that capture the essence of your brand with stunning visual storytelling.",
    features: ["Product Photography", "Corporate Portraits", "Event Coverage"]
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web solutions that deliver exceptional user experiences and drive business growth.",
    features: ["Responsive Design", "E-commerce Solutions", "SEO Optimization"]
  },
  {
    icon: Megaphone,
    title: "PR & Communications",
    description: "Strategic public relations and communications that build brand reputation and manage crisis situations.",
    features: ["Media Relations", "Crisis Management", "Thought Leadership"]
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
              <div key={index} className="glass-morphism rounded-xl p-8 card-hover">
                <div className="bg-gold bg-opacity-20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="text-gold text-2xl w-8 h-8" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
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
