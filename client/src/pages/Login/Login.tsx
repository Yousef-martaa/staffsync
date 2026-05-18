import { useState } from "react";
import type React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setError("");
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError("Login failed. Please check your email and password.");
                return;
            }

            localStorage.setItem("token", data.token);
            alert("Login successful");
            navigate("/");
        } catch {
            setError("Unable to connect to the server. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="login-page">
            <h1>Login</h1>

            {error && <p className="error-message">{error}</p>}

            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        required
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        required
                        minLength={6}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <button className="login-submit-btn" type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </button>

                <p className="signup-link-text">
                    Don't have an account? <Link to="/signup">Create an account</Link>
                </p>
            </form>
        </main>
    );
}