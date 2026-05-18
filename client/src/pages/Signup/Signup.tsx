import { useState } from "react";
import type React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nameParts = fullName.trim().split(" ");

        if (nameParts.length < 2) {
            setError("Please enter both first and last name.");
            return;
        }

        if (!email.endsWith("@staffsync.com")) {
            setError("Please use your StaffSync company email.");
            return;
        }

        setError("");
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Account creation failed");
                return;
            }

            alert("Account created successfully");
            navigate("/login");
        } catch {
            setError("Unable to connect to the server. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="login-page">
            <h1>Create Account</h1>

            {error && <p className="error-message">{error}</p>}

            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label>Full Name</label>
                    <input
                        type="text"
                        value={fullName}
                        required
                        minLength={2}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                </div>

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
                    {isLoading ? "Creating account..." : "Create Account"}
                </button>

                <p className="signup-link-text">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </main>
    );
}