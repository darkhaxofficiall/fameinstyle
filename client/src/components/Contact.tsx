import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  serviceInterest: string;
  projectDetails: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    serviceInterest: "",
    projectDetails: ""
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your inquiry. We'll be in touch within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        serviceInterest: "",
        projectDetails: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit your inquiry. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form submission error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.serviceInterest) {
      toast({
        title: "Please fill in all required fields",
        description: "First name, last name, email, and service interest are required.",
        variant: "destructive",
      });
      return;
    }

    submitContactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Start Your <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your brand? Let's discuss how we can drive measurable results for your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-morphism rounded-xl p-8">
            <h3 className="text-2xl font-montserrat font-semibold mb-6">Get Started Today</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gold border-opacity-30 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gold border-opacity-30 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gold border-opacity-30 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <Label htmlFor="company" className="block text-sm font-medium mb-2">Company</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gold border-opacity-30 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <Label htmlFor="serviceInterest" className="block text-sm font-medium mb-2">Service Interest *</Label>
                <Select value={formData.serviceInterest} onValueChange={(value) => handleInputChange("serviceInterest", value)}>
                  <SelectTrigger className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gold border-opacity-30 rounded-lg focus:border-gold focus:outline-none transition-colors">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social-media-marketing">Social Media Marketing</SelectItem>
                    <SelectItem value="reels-editing">Reels Editing</SelectItem>
                    <SelectItem value="website-ui-ux">Website UI/UX</SelectItem>
                    <SelectItem value="brand-design">Brand Design</SelectItem>
                    <SelectItem value="video-production">Video Production</SelectItem>
                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                    <SelectItem value="full-campaign">Full Campaign</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="projectDetails" className="block text-sm font-medium mb-2">Project Details</Label>
                <Textarea
                  id="projectDetails"
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gold border-opacity-30 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  placeholder="Tell us about your project goals and requirements..."
                />
              </div>
              <Button 
                type="submit" 
                disabled={submitContactMutation.isPending}
                className="w-full bg-gold text-black py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-colors duration-200"
              >
                {submitContactMutation.isPending ? "Submitting..." : "Schedule Consultation"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-morphism rounded-xl p-8">
              <h3 className="text-2xl font-montserrat font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-gold bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+91 82799 44814</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gold bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">fameinstyleofficial@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gold bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-gray-300">Amravati, Maharashtra<br />India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-morphism rounded-xl p-8">
              <h3 className="text-2xl font-montserrat font-semibold mb-6">Follow Us</h3>
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
                    className="bg-gold bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors"
                  >
                    <i className={`fab fa-${social.icon} text-gold`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
