import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Scene3D from "@/components/Scene3D";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  budget: string;
  projectTimeline: string;
  projectDetails: string;
  preferredContact: string;
  hearAboutUs: string;
}

const budgetRanges = [
  "$5,000 - $10,000",
  "$10,000 - $25,000", 
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+"
];

const timelineOptions = [
  "ASAP - Rush Project",
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "6+ months"
];

const contactMethods = [
  "Email",
  "Phone",
  "Video Call",
  "In-Person Meeting"
];

const hearAboutOptions = [
  "Google Search",
  "Social Media",
  "Referral",
  "Our Website",
  "Previous Client"
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "",
    budget: "",
    projectTimeline: "",
    projectDetails: "",
    preferredContact: "",
    hearAboutUs: ""
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        company: data.company,
        serviceInterest: data.serviceInterest,
        projectDetails: `Budget: ${data.budget}\nTimeline: ${data.projectTimeline}\nPreferred Contact: ${data.preferredContact}\nHeard About Us: ${data.hearAboutUs}\nPhone: ${data.phone}\n\nProject Details:\n${data.projectDetails}`
      });
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
        phone: "",
        company: "",
        serviceInterest: "",
        budget: "",
        projectTimeline: "",
        projectDetails: "",
        preferredContact: "",
        hearAboutUs: ""
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
              Let's Create Something <span className="text-gradient">Amazing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Ready to transform your brand? Get in touch with our expert team for a personalized consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-charcoal relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-morphism rounded-xl p-8">
                <h2 className="text-3xl font-montserrat font-bold mb-8">Project Inquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Personal Information */}
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <Label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gold border-opacity-30 rounded-lg focus:border-gold focus:outline-none transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
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

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          <SelectItem value="full-campaign">Full Campaign</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gold border-opacity-30 rounded-lg focus:border-gold focus:outline-none transition-colors">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="projectTimeline" className="block text-sm font-medium mb-2">Project Timeline</Label>
                      <Select value={formData.projectTimeline} onValueChange={(value) => handleInputChange("projectTimeline", value)}>
                        <SelectTrigger className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gold border-opacity-30 rounded-lg focus:border-gold focus:outline-none transition-colors">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="preferredContact" className="block text-sm font-medium mb-2">Preferred Contact Method</Label>
                      <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange("preferredContact", value)}>
                        <SelectTrigger className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gold border-opacity-30 rounded-lg focus:border-gold focus:outline-none transition-colors">
                          <SelectValue placeholder="Select contact method" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactMethods.map((method) => (
                            <SelectItem key={method} value={method}>{method}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="hearAboutUs" className="block text-sm font-medium mb-2">How did you hear about us?</Label>
                    <Select value={formData.hearAboutUs} onValueChange={(value) => handleInputChange("hearAboutUs", value)}>
                      <SelectTrigger className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gold border-opacity-30 rounded-lg focus:border-gold focus:outline-none transition-colors">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {hearAboutOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="projectDetails" className="block text-sm font-medium mb-2">Project Details</Label>
                    <Textarea
                      id="projectDetails"
                      rows={6}
                      value={formData.projectDetails}
                      onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                      className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gold border-opacity-30 rounded-lg focus:border-gold focus:outline-none transition-colors"
                      placeholder="Tell us about your project goals, target audience, specific requirements, and any other details that would help us understand your vision..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={submitContactMutation.isPending}
                    className="w-full bg-gold text-black py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-colors duration-200"
                  >
                    {submitContactMutation.isPending ? "Submitting..." : "Submit Project Inquiry"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-gold bg-opacity-20 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      <Phone className="text-gold w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Phone</p>
                      <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gold bg-opacity-20 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      <Mail className="text-gold w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Email</p>
                      <p className="text-gray-300 text-sm">hello@fameandstyle.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gold bg-opacity-20 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      <MapPin className="text-gold w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Office</p>
                      <p className="text-gray-300 text-sm">123 Creative Ave<br />New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-gold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-gold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-4">Response Time</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="text-gold w-5 h-5 mr-3" />
                    <span className="text-gray-300">Email: Within 2 hours</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-gold w-5 h-5 mr-3" />
                    <span className="text-gray-300">Phone: Immediate</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-gold w-5 h-5 mr-3" />
                    <span className="text-gray-300">Consultation: Within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-4">Emergency Contact</h3>
                <p className="text-gray-300 text-sm mb-3">
                  For urgent project needs or rush orders
                </p>
                <div className="flex items-center">
                  <MessageCircle className="text-gold w-5 h-5 mr-3" />
                  <span className="text-gold">+1 (555) 999-RUSH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}