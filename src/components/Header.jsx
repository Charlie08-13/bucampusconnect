import { NavLink } from "react-router-dom";
import bulogo from "../assets/bu.png";

const Header = () => {
const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSdiSP1LvkO7rzUZss3tKXta8ejcEsxXqovLMfYk_iQ_gobIZg/viewform?usp=dialog"; // <-- Replace this with your Google Form link

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a1f44] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="http://bujhansi.co.in/en.html" target="_blank" rel="noopener noreferrer">
            <img
              src={bulogo}
              alt="BU Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-all duration-300"
            />
          </a>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400 tracking-wide">
            BU Campus Connect
          </span>
        </div>

        {/* Navigation + Button */}
        <div className="flex items-center gap-4 md:gap-6">

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-4 lg:gap-6 font-medium">
            {["/", "/clubs", "/events", "/schedule"].map((path, i) => {
              const labels = ["Home", "Clubs", "Events", "Schedule"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `relative text-sm md:text-base lg:text-lg transition duration-300
                     ${isActive ? "text-yellow-400" : "text-gray-200 hover:text-yellow-400"}
                     after:content-[''] after:absolute after:left-0 after:-bottom-1
                     after:w-0 after:h-[2px] after:bg-yellow-400
                     after:transition-all after:duration-300
                     hover:after:w-full`
                  }
                >
                  {labels[i]}
                </NavLink>
              );
            })}
          </nav>

          {/* Join Button */}
          <a
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2 rounded-full bg-blue-600 text-white font-bold hover:bg-red-600 transition"
          >
            Join Now
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
