import { Link } from "react-router-dom";

import "../../App.css";
import Navbar from "../../components/Navbar/Navbar";
export default function Home() {

  const token = localStorage.getItem("token");

  return (
    <div className="app">
      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Manage Your Workforce Smarter</h1>
          <p>
            Track employees, tasks, salaries, work hours, and leave requests in
            one modern platform.
          </p>

          <div className="hero-buttons">
            {token ? (
              <p className="welcome-text">Welcome back to StaffSync</p>
            ) : (
              <>
                <Link to="/login" className="primary-btn">
                  Get Started
                </Link>
                <button className="secondary-btn">Learn More</button>
              </>
            )}
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
