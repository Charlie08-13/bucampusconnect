import { useParams } from "react-router-dom";
import { useState } from "react";
import clubs from "../data/clubsData";
import ImageSlider from "../components/ImageSlider";
import JoinClubForm from "../components/JoinClubForm";
import ClubEvents from "../components/ClubEvents";

const ClubDetails = () => {
  const { id } = useParams();
  const club = clubs.find(
    (c) => c.id.toLowerCase() === id.toLowerCase()
  );
  const [showForm, setShowForm] = useState(false);

  if (!club) {
    return (
      <p className="p-10 text-center text-red-600 font-semibold">
        Club not found
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

      {/* ===== Club Name ===== */}
      <div className="text-center">
        <h1
          className={`inline-block px-6 py-2 rounded-3xl text-3xl md:text-4xl ${club.nameStyle}`}
        >
          {club.name}
        </h1>
      </div>

      {/* ===== Coordinator ===== */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-3xl shadow-xl text-center w-full max-w-sm">
          <img
            src={club.coordinatorImage}
            alt={club.coordinator}
            className="w-32 h-32 mx-auto rounded-full object-cover ring-4 ring-blue-400 shadow-md"
          />
          <h2 className="mt-3 text-xl font-semibold text-gray-800">
            {club.coordinator}
          </h2>
          <p className="text-sm text-gray-600">
            {club.coordinatorTitle}
          </p>
        </div>
      </div>

      {/* ===== Gallery ===== */}
      {club.gallery?.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-center mb-3">
            Past Events
          </h3>
          <ImageSlider images={club.gallery} />
        </div>
      )}

      {/* ===== Club Events (Backend) ===== */}
      <ClubEvents clubId={club.id} />

      {/* ===== About ===== */}
      <div className="bg-gradient-to-r from-white to-blue-50 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-2">
          About the Club
        </h3>
        <p className="text-gray-700 text-sm">
          {club.about}
        </p>
      </div>

      {/* ===== Members ===== */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-2">
          Members
        </h3>
        <ul className="list-disc ml-5 text-gray-700 space-y-1 text-sm">
          {club.members.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>

      {/* ===== Join Button ===== */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-8 py-2 rounded-full font-bold hover:bg-blue-700 transition shadow"
        >
          Join Now
        </button>
      </div>

      {showForm && (
        <JoinClubForm
          clubName={club.name}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default ClubDetails;
