function Footer() {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About */}
          <div>
            <h4 className="text-blue-600 font-bold text-lg mb-2">
              BU Campus Connect
            </h4>
            <p className="text-sm text-gray-600">
              Your gateway to campus life. Connect, engage, and thrive with clubs and events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="/clubs" className="hover:text-blue-600">All Clubs</a></li>
              <li><a href="/events" className="hover:text-blue-600">Upcoming Events</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-600">📍 Bundelkhand University, Jhansi</p>
            <p className="text-sm text-gray-600">📞 +91 00000 00000</p>
            <p className="text-sm text-gray-600">📧 info@campusconnect.edu</p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-2">Stay Updated</h4>
            <p className="text-sm text-gray-600 mb-3">
              Subscribe for latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="px-3 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-4 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-4 text-center text-sm text-gray-500">
          © 2025 BU Campus Connect. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
