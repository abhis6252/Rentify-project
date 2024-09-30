import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LogInPage.css";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
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
