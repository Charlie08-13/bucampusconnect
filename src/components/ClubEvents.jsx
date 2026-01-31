import { useEffect, useState } from "react";

const ClubEvents = ({ clubId }) => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/events?club=${clubId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => setEvents(data))
      .catch(() => setError(true));
  }, [clubId]);

  if (error) {
    return (
      <p className="text-center text-gray-500 text-sm">
        Events will be updated soon 🚀
      </p>
    );
  }

  if (!events.length) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-center">
        Upcoming Events
      </h3>

      {events.map((event) => (
        <div
          key={event._id}
          className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all border-l-4 border-blue-500"
        >
          <h4 className="text-lg font-bold text-gray-800">
            {event.title}
          </h4>
          <p className="text-gray-600 text-sm mt-1">
            {event.description}
          </p>
          <span className="text-xs text-gray-400">
            📅 {event.date}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ClubEvents;
