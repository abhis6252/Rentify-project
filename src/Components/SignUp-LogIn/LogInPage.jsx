import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LogInPage.css";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("https://localhost:7229/api/Auth/SignIn", { // replace with your API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login Successful!", data);

        // Save token or user data in localStorage or context if needed
        // localStorage.setItem('token', data.token);

        // Redirect to home page
        navigate("/home");
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="auth-container">
      <h2>LOGIN</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={{ backgroundColor: "rgb(104, 126, 171)" }} type="submit">
          Login
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>
        New User?{" "}
        <Link style={{ color: "#505052" }} to="/signup">
          Signup
        </Link>
      </p>
    </div>
  );
}

export default LogInPage;
