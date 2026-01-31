import { useParams } from "react-router-dom";
import events from "../data/eventsData";
import { useState } from "react";
import RegisterModal from "../components/RegisterModal";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const [open, setOpen] = useState(false);

  if (!event) return <p>Event not found</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <img
        src={event.image}
        className="w-full h-[350px] object-cover rounded-3xl mb-8"
      />

      <h1 className="text-4xl font-extrabold mb-4">{event.title}</h1>
      <p className="text-gray-600 mb-6">{event.details}</p>

      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-xl font-bold"
      >
        Register Now
      </button>

      {open && (
        <RegisterModal
          link={event.registrationLink}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default EventDetails;
