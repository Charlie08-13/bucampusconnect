import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import ClubDetails from "./pages/ClubDetails"; // ✅ IMPORT ADDED
import Events from "./pages/Events";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/:id" element={<ClubDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
