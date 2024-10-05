import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import "./SignUpPage.css";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const signupData = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://localhost:7229/api/Auth/SignUp",
        signupData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Signup Successful!", response.data);

        
        navigate("/login");
      } else {
        setErrorMessage("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="auth-container">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
          SIGN UP
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>
        Already Have An Account?{" "}
        <Link style={{ color: "#505052" }} to="/login">
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignUpPage;
