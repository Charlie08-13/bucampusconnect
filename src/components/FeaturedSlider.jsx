import { useEffect, useState } from "react";
import events from "../data/eventsData";

const FeaturedSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const event = events[index];

  return (
    <div className="relative h-[320px] rounded-3xl overflow-hidden shadow-xl mb-16">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          {event.title}
        </h2>
        <p className="text-gray-200 max-w-xl">{event.description}</p>
      </div>
    </div>
  );
};

export default FeaturedSlider;
