import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/events");
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <p className="text-xl font-semibold animate-pulse text-blue-600">
          Loading Events...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <p className="text-red-600 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
          Campus Events
        </h1>
        <p className="text-gray-600 mt-2 md:mt-4">
          Explore upcoming and exciting events organized by our clubs
        </p>
      </div>

      {/* Events Grid */}
      {events.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No events available at the moment
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Event Image */}
              {event.image ? (
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-56 w-full object-cover"
                />
              ) : (
                <div className="h-56 w-full bg-gray-200 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}

              {/* Event Content */}
              <div className="p-6 space-y-2">
                <h2 className="text-xl font-bold text-gray-800">{event.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">{event.description}</p>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-sm font-semibold text-purple-600">
                    📅 {new Date(event.date).toDateString()}
                  </span>
                  <button className="px-4 py-1.5 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
