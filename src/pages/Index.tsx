
import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/ProductCarousel";
import { Download, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  // Function to create WhatsApp link with pre-filled message
  const getWhatsAppLink = (phoneNumber: string) => {
    // Remove any non-numeric characters from phone number
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    return `https://wa.me/91${cleanNumber}?text=Hi,%20I%20found%20your%20contact%20from%20AK%20Rubber%20Spares%20website.`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            AK Rubber Spares
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All kinds of Hydraulic & Pneumatic Seals, V Seals, O Rings, Oil Seals & All Types of Rubber in Synthetic, Neoprene, Silicon, Viton Rubber, P.U. Rubber & P.U. Seals etc.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Products</h2>
        <ProductCarousel />
        
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-colors"
          >
            <Download className="mr-2" />
            Download Our Latest Catalogue 2025
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About us</h2>
          <p className="text-lg text-gray-600 mb-6">
            Since 1991, AK Rubber Spares has been a trusted name in providing high-quality rubber and hydraulic components.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We specialize in delivering precision-engineered seals, O-rings, and industrial rubber products. Our commitment to customer satisfaction and top-notch quality has made us a reliable partner in the industry for over three decades.
          </p>
          <p className="text-sm text-gray-500">
            GSTIN: 06AAGPC8120M2ZS
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-4" />
            <div className="space-y-2">
              <a 
                href={getWhatsAppLink('9810580983')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-green-600 transition-colors"
              >
                9810580983
              </a>
              <a 
                href={getWhatsAppLink('9910249777')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-green-600 transition-colors"
              >
                9910249777
              </a>
            </div>
          </div>
          <div className="text-center">
            <Mail className="w-8 h-8 mx-auto mb-4" />
            <a href="mailto:chhabraajay25@gmail.com" className="text-gray-600 hover:text-gray-900">
              chhabraajay25@gmail.com
            </a>
          </div>
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4" />
            <p className="text-gray-600">
              Shop No. 2, 434/8 Madanpuri Road, Opp. Laxmi Bazaar, New Colony, Gurugram (HR)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="text-center">
          <p>Copyrights © 2025 AK Rubber | Made by DC</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
