import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">INDIPL</h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li>Matches</li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Help">Help</Link></li>
        </ul>

        <div className="nav-buttons">
          <Link to="/signup" className="btn black">Sign up</Link>
          <Link to="/login" className="btn outline">Log in</Link>
        </div>
      </nav>

      {/* HERO (unchanged) */}
      <section className="hero">
        <h1>Book IPL tickets together.</h1>
        <p>
          Experience live IPL cricket with seamless online ticket booking.
        </p>
        <button className="hero-btn">Book tickets.</button>
      </section>
    </>
  );
}

export default Home;
