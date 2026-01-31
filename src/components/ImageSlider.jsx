import { useEffect, useState, useRef } from "react";

const ImageSlider = ({ images = [], autoSlide = false, intervalTime = 3000 }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const startAutoSlide = () => {
    if (!autoSlide || images.length <= 1) return;
    stopAutoSlide();
    intervalRef.current = setInterval(next, intervalTime);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSlide, images.length]);

  if (!images.length) return null;

  return (
    <div
      className="relative w-full max-w-3xl mx-auto"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-64 md:h-80 object-cover transition-all duration-700 ease-in-out"
        />
      </div>

      {/* Prev Button */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded-full hover:bg-black transition"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded-full hover:bg-black transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === index
                ? "bg-blue-600 scale-125 shadow-md"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
