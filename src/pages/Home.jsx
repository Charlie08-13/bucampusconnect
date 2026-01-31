import { Link } from "react-router-dom";

// Leader images
import singhImg from "../assets/singh.png";
import mukeshImg from "../assets/mukesh.png";
import registrarImg from "../assets/registrar.png";

// Leadership section background
import cardBg from "../assets/card-bg.jpg";

const leaders = [
  {
    name: "M. M. Singh",
    role: "IET Dean",
    image: singhImg,
  },
  {
    name: "Prof. Mujeen Pandey",
    role: "Vice Chancellor",
    image: mukeshImg,
    featured: true,
  },
  {
    name: "Mr. Gyanendra Kumar",
    role: "Registrar",
    image: registrarImg,
  },
];

function Home() {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">

      {/* ================= Leadership Section ================= */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url(${cardBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex justify-center items-end gap-8 flex-wrap">

              {leaders.map((person, index) => (
                <div
                  key={index}
                  className={`w-[220px] rounded-2xl transition-all duration-300 hover:-translate-y-2
                    ${
                      person.featured
                        ? "bg-white border-2 border-blue-600 shadow-xl scale-105"
                        : "bg-gray-100 shadow-lg"
                    }`}
                >
                  {/* Image */}
                  <div className="flex justify-center pt-5">
                    <img
                      src={person.image}
                      alt={person.name}
                      className={`object-cover rounded-xl
                        ${
                          person.featured
                            ? "w-32 h-32 ring-4 ring-blue-500"
                            : "w-24 h-24"
                        }`}
                    />
                  </div>

                  {/* Info */}
                  <div className="mt-4 p-5 bg-white rounded-b-2xl text-center">
                    <h4 className="font-semibold text-sm text-gray-800">
                      {person.name}
                    </h4>
                    <p className="text-xs text-gray-500">{person.role}</p>

                    {person.featured && (
                      <p className="mt-3 text-[11px] leading-snug text-blue-600 font-medium">
                        Prof (Dr.) Mukesh Pandey <br />
                        B.E. (Hons.), M.Tech (Hons), Ph.D. <br />
                        Vice Chancellor <br />
                        Bundelkhand University, Jhansi <br />
                        Uttar Pradesh, India
                      </p>
                    )}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ================= Hero Section ================= */}
      <section className="text-center mb-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          BU Campus Connect
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Discover clubs, attend events, and engage with your university
          community through one unified platform.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <Link
            to="/clubs"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Explore Clubs →
          </Link>
          <Link
            to="/events"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition"
          >
            View Events
          </Link>
        </div>
      </section>

      {/* ================= Stats Section ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div className="bg-white border-2 border-blue-500 rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition">
            <span className="text-blue-600 text-3xl">📊</span>
            <h2 className="text-lg font-bold">7+ Active Clubs</h2>
          </div>

          <div className="bg-white border-2 border-green-500 rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition">
            <span className="text-green-600 text-3xl">📅</span>
            <h2 className="text-lg font-bold">20+ Events Yearly</h2>
          </div>

          <div className="bg-white border-2 border-teal-500 rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition">
            <span className="text-teal-600 text-3xl">👥</span>
            <h2 className="text-lg font-bold">500+ Active Members</h2>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
