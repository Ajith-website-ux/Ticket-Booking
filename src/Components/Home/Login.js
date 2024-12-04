import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export const LoginUser = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "test@gmail.com" && password === "ajux1234") {
      alert("Login successful!");
      onLogin();
      localStorage.setItem("isAuthenticated", "true");
      navigate("/demo");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg form-container card" style={{ height: "79vh"}}>
            <h3 style={{marginTop:"180px"}}>
              🎬 Ready for Showtime? Log in now to book your favorite movies,
              grab the best seats, and unlock exclusive deals! Your movie magic
              awaits. 🍿✨
            </h3>
          </div>
          <div className="col-lg form-container card">
            <div className="row mt-5">
              <div className="col">
                <p className="title">Welcome to Ajuz Tickets</p>
                <form className="form" onSubmit={handleLogin}>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {error && <p className="text-danger">{error}</p>}
                  <p className="page-link">
                    <span className="page-link-label">Forgot Password?</span>
                  </p>
                  <button className="form-btn">Log in</button>
                </form>
                <p className="sign-up-label">
                  Don't have an account?
                  <span className="sign-up-link">Sign up</span>
                </p>
                <div className="buttons-container">
                  <div className="apple-login-button">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      className="apple-icon"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
                    </svg>
                    <span>Log in with Apple</span>
                  </div>
                  <div className="google-login-button">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                        localStorage.setItem("isAuthenticated", "true");
                        onLogin();
                        navigate("/demo");
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
