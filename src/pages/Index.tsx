
import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/ProductCarousel";
import { Download, Phone, Mail, MapPin } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  const getWhatsAppLink = (phoneNumber: string) => {
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    return `https://wa.me/91${cleanNumber}?text=Hi,%20I%20found%20your%20contact%20from%20AK%20Rubber%20Spares%20website.`;
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-700 ease-out">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 transition-all duration-700 hover:scale-105">
            AK Rubber Spares
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto transform transition-all duration-500 hover:text-white">
            All kinds of Hydraulic & Pneumatic Seals, V Seals, O Rings, Oil Seals & All Types of Rubber in Synthetic, Neoprene, Silicon, Viton Rubber, P.U. Rubber & P.U. Seals etc.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-700 ease-out">
        <h2 className="text-3xl font-bold text-white mb-8 text-center transform transition-all duration-500 hover:scale-105">
          Our Products
        </h2>
        <ProductCarousel />
        
        <div className="mt-12 text-center">
          <a
            href="https://drive.google.com/file/d/1Pr42PnUVN7hULO2B1qdUcza7V8mSTfPk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Download className="mr-2" />
            Download Our Latest Catalogue 2025
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-900 transition-all duration-700 ease-out">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8 transform transition-all duration-500 hover:scale-105">About us</h2>
          <p className="text-lg text-gray-300 mb-6 transition-all duration-300 hover:text-white">
            Since 1991, AK Rubber Spares has been a trusted name in providing high-quality rubber and hydraulic components.
          </p>
          <p className="text-lg text-gray-300 mb-6 transition-all duration-300 hover:text-white">
            We specialize in delivering precision-engineered seals, O-rings, and industrial rubber products. Our commitment to customer satisfaction and top-notch quality has made us a reliable partner in the industry for over three decades.
          </p>
          <p className="text-sm text-gray-400 transition-all duration-300 hover:text-white">
            GSTIN: 06AAGPC8120M2ZS
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-700 ease-out">
        <h2 className="text-3xl font-bold text-white mb-8 text-center transform transition-all duration-500 hover:scale-105">Contact us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center transform transition-all duration-500 hover:-translate-y-2">
            <Phone className="w-8 h-8 mx-auto mb-4 text-white transition-all duration-300 hover:scale-110" />
            <div className="space-y-2">
              <a 
                href={getWhatsAppLink('9810580983')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-green-400 transition-all duration-300"
              >
                9810580983
              </a>
              <a 
                href={getWhatsAppLink('9910249777')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-green-400 transition-all duration-300"
              >
                9910249777
              </a>
            </div>
          </div>
          <div className="text-center transform transition-all duration-500 hover:-translate-y-2">
            <Mail className="w-8 h-8 mx-auto mb-4 text-white transition-all duration-300 hover:scale-110" />
            <a href="mailto:chhabraajay25@gmail.com" className="text-gray-300 hover:text-white transition-all duration-300">
              chhabraajay25@gmail.com
            </a>
          </div>
          <div className="text-center transform transition-all duration-500 hover:-translate-y-2">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-white transition-all duration-300 hover:scale-110" />
            <p className="text-gray-300 transition-all duration-300 hover:text-white">
              Shop No. 2, 434/8 Madanpuri Road, Opp. Laxmi Bazaar, New Colony, Gurugram (HR)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white py-6">
        <div className="text-center">
          <p className="transform transition-all duration-300 hover:scale-105">Made with ❤️ by DC</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
