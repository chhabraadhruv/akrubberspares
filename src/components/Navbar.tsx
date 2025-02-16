
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full backdrop-blur-sm z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 shadow-lg' : 'bg-black/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/6ded73ce-99af-437d-97a4-2e55f87fb4ac.png" 
              alt="AK Rubber Logo" 
              className="h-12 w-12 transition-transform duration-300 hover:scale-105" 
            />
            <div className="ml-4">
              <h1 className="text-xl font-semibold text-white transition-all duration-300 hover:scale-105">AK Rubber Spares</h1>
              <p className="text-xs text-gray-400">SINCE 1991</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'products', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white hover:text-gray-300 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zinc-900">
          {['home', 'products', 'about', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block px-3 py-2 text-white hover:bg-zinc-800 rounded-md transition-all duration-300 hover:translate-x-2"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
