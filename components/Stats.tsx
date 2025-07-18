const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "250%", label: "Average ROI Increase" },
  { value: "50M+", label: "Content Views Generated" },
  { value: "98%", label: "Client Satisfaction Rate" }
];

export default function Stats() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that demonstrate our commitment to delivering exceptional value and measurable outcomes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
