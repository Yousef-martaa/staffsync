import { Link } from "react-router-dom";

import "../../App.css";
import logo from "../../assets/logo.png";

export default function Home() {
  return (
    <div className="app">
      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="StaffSync Logo" className="logo-img" />
          <div className="brand-text">
            <h2>SYNC PEOPLE</h2>
            <h2>MANAGE BETTER</h2>
          </div>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pos">POS</Link>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button className="login-btn">Login</button>
          <button className="start-btn">Sign Up</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Manage Your Workforce Smarter</h1>
          <p>
            Track employees, tasks, salaries, work hours, and leave requests in
            one modern platform.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <span>support@staffsync.com</span>
          <span>github.com/Yousef-martaa/staffsync</span>
          <span>© 2026 StaffSync</span>
        </div>
      </footer>
    </div>
  );
}
