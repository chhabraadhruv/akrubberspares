
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/lovable-uploads/42f9ef82-0f04-4a24-b843-65169f60df16.png" alt="AK Rubber Logo" className="h-12 w-12" />
            <div className="ml-4">
              <h1 className="text-xl font-semibold">AK Rubber Spares</h1>
              <p className="text-xs text-gray-500">SINCE 1991</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-900 hover:text-gray-600 transition-colors">Home</a>
            <a href="#products" className="text-gray-900 hover:text-gray-600 transition-colors">Products</a>
            <a href="#about" className="text-gray-900 hover:text-gray-600 transition-colors">About us</a>
            <a href="#contact" className="text-gray-900 hover:text-gray-600 transition-colors">Contact Us</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md">Home</a>
            <a href="#products" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md">Products</a>
            <a href="#about" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md">About us</a>
            <a href="#contact" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
