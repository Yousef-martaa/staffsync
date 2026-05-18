import { Link } from "react-router-dom";

import "../../App.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.reload();
    };

    return (
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

                {token ? (
                    <>
                        {user?.role === "manager" && (
                            <Link to="/dashboard" className="login-btn">
                                Manager Dashboard
                            </Link>
                        )}

                        {user?.role === "hr" && (
                            <Link to="/dashboard" className="login-btn">
                                HR Dashboard
                            </Link>
                        )}

                        {user?.role === "employee" && (
                            <Link to="/dashboard" className="login-btn">
                                My Dashboard
                            </Link>
                        )}

                        <button className="start-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="login-btn">
                            Login
                        </Link>
                        <Link to="/signup" className="start-btn">
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}