
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 1, image: "/lovable-uploads/42f9ef82-0f04-4a24-b843-65169f60df16.png", alt: "Hydraulic Seals" },
  { id: 2, image: "/lovable-uploads/42f9ef82-0f04-4a24-b843-65169f60df16.png", alt: "Pneumatic Seals" },
  { id: 3, image: "/lovable-uploads/42f9ef82-0f04-4a24-b843-65169f60df16.png", alt: "O Rings" },
  { id: 4, image: "/lovable-uploads/42f9ef82-0f04-4a24-b843-65169f60df16.png", alt: "Kastas" },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden aspect-[16/9] bg-gray-100 rounded-lg">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-full h-full flex items-center justify-center"
          >
            <img
              src={product.image}
              alt={product.alt}
              className="h-full object-contain"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ProductCarousel;
