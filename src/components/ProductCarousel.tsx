
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 1, image: "/lovable-uploads/bcff7545-dafb-4b46-9f59-bf6360dad6d6.png", alt: "Hydraulic Seals Kit - Colored Components" },
  { id: 2, image: "/lovable-uploads/f4835aa2-2d58-4b2e-9383-340e1ab63a63.png", alt: "Oil Seals - Brown and Black Collection" },
  { id: 3, image: "/lovable-uploads/a57d3b1c-b75f-4e28-9db7-a4ecaaf86ccf.png", alt: "Industrial Rubber Sheets - Black, Red, and White" },
  { id: 4, image: "/lovable-uploads/ada6dc73-a4fb-4ef5-9069-4a27fb66e617.png", alt: "Spiral Seal Components" },
  { id: 5, image: "/lovable-uploads/57830537-141d-4388-bccd-b17458c8dde9.png", alt: "Colorful Hydraulic Seals" },
  { id: 6, image: "/lovable-uploads/dc0efec6-6765-432b-bd2f-acd8769e06df.png", alt: "O-Rings Collection" },
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
            className="min-w-full h-full flex items-center justify-center p-8"
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

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;

