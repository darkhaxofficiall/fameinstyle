export default function Footer() {
  return (
    <footer className="bg-charcoal py-12 border-t border-gold border-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-montserrat font-bold text-gradient mb-4">Fame & Style</div>
            <p className="text-gray-300 mb-4">Elevating brands through premium creative solutions and strategic digital marketing.</p>
            <div className="flex space-x-4">
              {[
                { icon: "linkedin", href: "#" },
                { icon: "twitter", href: "#" },
                { icon: "instagram", href: "#" },
                { icon: "youtube", href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-gold transition-colors">Video Production</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Brand Design</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Photography</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Awards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+1 (555) 123-4567</li>
              <li>hello@fameandstyle.com</li>
              <li>123 Creative Avenue<br />New York, NY 10001</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gold border-opacity-20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2024 Fame & Style. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-gold text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-gold text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
