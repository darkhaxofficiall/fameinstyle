const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Luxury Brand Campaign",
    description: "360° campaign increasing brand awareness by 250%",
    category: "Video Production"
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Tech Startup Rebrand",
    description: "Complete identity overhaul boosting investor confidence",
    category: "Brand Design"
  },
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "E-commerce Growth",
    description: "300% increase in online sales through strategic campaigns",
    category: "Digital Marketing"
  },
  {
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Fashion Editorial",
    description: "Award-winning photography series for luxury fashion brand",
    category: "Photography"
  },
  {
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Corporate Documentary",
    description: "C-suite thought leadership series with 2M+ views",
    category: "Video Production"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Social Impact Campaign",
    description: "Viral campaign generating 50M+ impressions",
    category: "Strategy"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our award-winning projects that have transformed brands and driven exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl card-hover">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-montserrat font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="glass-morphism text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-20 transition-all duration-200">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
