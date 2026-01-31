import { useState } from "react";
import { Link } from "react-router-dom";
import clubs from "../data/clubsData";

const Clubs = () => {
  const [loading] = useState(false);

  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading clubs...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-12 drop-shadow-lg">
        University Clubs
      </h1>

      {/* Clubs Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {clubs.map((club) => (
          <Link
            key={club.id}
            to={`/clubs/${club.id}`}
            className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Club Image */}
            <div className="h-64 md:h-72 w-full overflow-hidden rounded-3xl">
              <img
                src={club.image || "https://via.placeholder.com/400x300?text=Club"}
                alt={club.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            {/* Club Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-3xl">
              <h2
                className={`text-2xl font-bold ${club.nameStyle || "text-blue-400"}`}
              >
                {club.name}
              </h2>
              <p className="text-sm mt-1 line-clamp-3">{club.shortDesc}</p>
              <span className="inline-block mt-3 bg-blue-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
                View Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
