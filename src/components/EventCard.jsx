import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
      <div className="relative h-52">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
          {new Date(event.date).toDateString()}
        </span>
      </div>

      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {event.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-purple-600 font-semibold text-sm">
            {event.club}
          </span>
          <Link
            to={`/events/${event.id}`}
            className="text-blue-600 font-bold text-sm"
          >
            View →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
