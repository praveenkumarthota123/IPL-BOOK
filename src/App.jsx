import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Teams from "./Teams";
import BookTicket from "./Bookticket";
import Matches from "./Matches";
import About from "./About";
import Help from "./Help";   // ✅ already correct
import Footer from "./Footer"; // ✅ imported footer

function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">IPL BOOK</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/matches">Matches</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/help">Help</Link></li> {/* ✅ path fixed */}
        </ul>

        <div className="nav-buttons">
          <Link to="/signup"><button className="signup">Sign up</button></Link>
          <Link to="/login"><button className="login">Log in</button></Link>
        </div>
      </nav>

      {/* Background Slider */}
      <div className="slider-container">
        <div className="slider">
          <div className="slide bg1"></div>
          <div className="slide bg2"></div>
          <div className="slide bg3"></div>
          <div className="slide bg4"></div>
          <div className="slide bg5"></div>
        </div>

        {/* Hero */}
        <section className="hero">
          <h1>Book IPL tickets together.</h1>
          <p>
            Experience live IPL cricket with seamless online ticket <br />
            booking.
          </p>

          <Link to="/book">
            <button className="hero-btn">Book Tickets</button>
          </Link>
        </section>
      </div>

      {/* SCROLL CONTENT */}
      <section className="cricket-info">
        <h1>Cricket & IPL Legacy</h1>

        <div className="info-grid">
          <div className="info-card">
            <h2>🏏 About Cricket</h2>
            <p>
              Cricket is one of the most popular sports in the world,
              followed passionately by millions of fans across countries.
              In India, cricket is more than a game — it’s an emotion.
            </p>
          </div>

          <div className="info-card">
            <h2>⭐ Legendary Cricketers</h2>
            <p>
              Sachin Tendulkar, MS Dhoni, Virat Kohli, Rohit Sharma,
              AB de Villiers and many more legends have shaped
              modern cricket and IPL history.
            </p>
          </div>

          <div className="info-card">
            <h2>🏆 IPL Champions</h2>
            <p>
              Mumbai Indians and Chennai Super Kings are the most
              successful IPL teams. Every IPL season brings
              thrilling matches, new talents and unforgettable moments.
            </p>
          </div>
        </div>

        <div className="champions">
          <h2>IPL Year-wise Champions</h2>
          <ul>
            <li>2018 – Chennai Super Kings</li>
            <li>2019 – Mumbai Indians</li>
            <li>2020 – Mumbai Indians</li>
            <li>2021 – Chennai Super Kings</li>
            <li>2022 – Gujarat Titans</li>
            <li>2023 – Chennai Super Kings</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/book" element={<BookTicket />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} /> {/* ✅ ADDED */}
      </Routes>
      <Footer /> {/* ✅ Footer added */}
    </BrowserRouter>
  );
}
