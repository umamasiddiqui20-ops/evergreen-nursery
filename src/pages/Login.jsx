import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import "../css/login.css";

function Login() {

  const [showPassword, setShowPassword] = useState(false);
const [rememberMe, setRememberMe] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleLogin = (e) => {

  e.preventDefault();

  setError("");

  if (!email.trim()) {
    setError("Email is required");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    setError("Please enter a valid email");
    return;
  }

  if (!password.trim()) {
    setError("Password is required");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

  alert("Frontend validation successful ✅");

};
  return (
    <>
      

      <section className="login-section">

        <div className="login-card">

          <h1>Welcome Back 🌿</h1>

          <p>
            Sign in to your Evergreen Nursery account.
          </p>

         <form
  className="login-form"
  onSubmit={handleLogin}
>

           <div className="input-group">

  <FaEnvelope className="input-icon" />

  <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

</div>

<div className="input-group">

  <FaLock className="input-icon" />

 <input
  type={showPassword ? "text" : "password"}
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
{error && (

  <p className="error-message">

    {error}

  </p>

)}

  <button
    type="button"
    className="eye-btn"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>

</div>

<div className="remember-row">

  <label>

    <input
      type="checkbox"
      checked={rememberMe}
      onChange={() => setRememberMe(!rememberMe)}
    />

    Remember Me

  </label>

  <Link to="#">
    Forgot Password?
  </Link>

</div>
            <button type="submit">
              Login
            </button>

          </form>

          <div className="login-links">


            <p>
              Don't have an account?{" "}
              <Link to="#">
                Sign Up
              </Link>
            </p>

          </div>

        </div>

      </section>

      
    </>
  );
}

export default Login;