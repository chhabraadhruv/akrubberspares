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
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AK Rubber Spares
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            All kinds of Hydraulic & Pneumatic Seals, V Seals, O Rings, Oil Seals & All Types of Rubber in Synthetic, Neoprene, Silicon, Viton Rubber, P.U. Rubber & P.U. Seals etc.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Products</h2>
        <ProductCarousel />
        
        <div className="mt-12 text-center">
          <a
            href="https://drive.google.com/file/d/1Pr42PnUVN7hULO2B1qdUcza7V8mSTfPk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-100 transition-colors"
          >
            <Download className="mr-2" />
            Download Our Latest Catalogue 2025
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">About us</h2>
          <p className="text-lg text-gray-300 mb-6">
            Since 1991, AK Rubber Spares has been a trusted name in providing high-quality rubber and hydraulic components.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            We specialize in delivering precision-engineered seals, O-rings, and industrial rubber products. Our commitment to customer satisfaction and top-notch quality has made us a reliable partner in the industry for over three decades.
          </p>
          <p className="text-sm text-gray-400">
            GSTIN: 06AAGPC8120M2ZS
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-4 text-white" />
            <div className="space-y-2">
              <a 
                href={getWhatsAppLink('9810580983')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-green-400 transition-colors"
              >
                9810580983
              </a>
              <a 
                href={getWhatsAppLink('9910249777')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-green-400 transition-colors"
              >
                9910249777
              </a>
            </div>
          </div>
          <div className="text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-white" />
            <a href="mailto:chhabraajay25@gmail.com" className="text-gray-300 hover:text-white">
              chhabraajay25@gmail.com
            </a>
          </div>
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-white" />
            <p className="text-gray-300">
              Shop No. 2, 434/8 Madanpuri Road, Opp. Laxmi Bazaar, New Colony, Gurugram (HR)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white py-6">
        <div className="text-center">
          <p>Made with ❤️ by DC</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
