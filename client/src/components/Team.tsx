import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const teamMembers = [
  {
    name: "Michael Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    description: "15+ years crafting award-winning campaigns for Fortune 500 companies. Expert in brand storytelling and visual identity.",
    social: [
      { icon: Linkedin, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Instagram, href: "#" }
    ]
  },
  {
    name: "Sarah Johnson",
    role: "Strategy Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    description: "Digital marketing strategist with proven track record of generating 500%+ ROI across multiple industries and platforms.",
    social: [
      { icon: Linkedin, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Instagram, href: "#" }
    ]
  },
  {
    name: "David Rodriguez",
    role: "Video Production Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    description: "Emmy-nominated director specializing in cinematic brand content and corporate documentaries with global reach.",
    social: [
      { icon: Linkedin, href: "#" },
      { icon: Youtube, href: "#" },
      { icon: Instagram, href: "#" }
    ]
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry veterans with decades of combined experience delivering exceptional results for global brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-morphism rounded-xl p-6 card-hover text-center">
              <img 
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-montserrat font-semibold mb-2">{member.name}</h3>
              <p className="text-gold mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm mb-4">{member.description}</p>
              <div className="flex justify-center space-x-3">
                {member.social.map((social, socialIndex) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={socialIndex}
                      href={social.href} 
                      className="text-gold hover:text-gold-light transition-colors"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
