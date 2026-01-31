import { useEffect, useRef } from "react";

const leaders = [
  { name: "Prof. Mujeen Pandey", role: "Vice Chancellor", img: "/leaders/vc.jpg" },
  { name: "M. M. Singh", role: "IET Dean", img: "/leaders/dean.jpg" },
  { name: "IET Registrar", role: "Registrar", img: "/leaders/registrar.jpg" },
  { name: "Er. Priyanka Pandey", role: "Academic Coordinator", img: "/leaders/academic.jpg" },
  { name: "Er. Satyendra Upadhyay", role: "Sports Coordinator", img: "/leaders/sports.jpg" },
  { name: "Er. Satyendra Upadhyay", role: "Cultural Coordinator", img: "/leaders/cultural.jpg" },
];

function LeadershipSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (slider) {
        scrollAmount += 1;
        slider.scrollLeft += 1;

        if (scrollAmount >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-hidden"
      >
        {[...leaders, ...leaders].map((person, index) => (
          <div
            key={index}
            className="min-w-[160px] text-center p-4 rounded-lg hover:shadow-md transition"
          >
            <img
              src={person.img}
              alt={person.name}
              className="w-20 h-20 mx-auto rounded-lg object-cover mb-3 border"
            />
            <h4 className="font-semibold text-sm">{person.name}</h4>
            <p className="text-xs text-gray-500">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeadershipSlider;
