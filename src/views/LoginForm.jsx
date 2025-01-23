import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../reducers/authSlice";
import LoginImage from "../assets/login_vector.svg";
import SocialMedia from "../components/socialmedia/SocialMedia";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Enter both email and password.");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, include 1 capital letter, 1 number, and 1 symbol."
      );
      return;
    }
    setError("");
    dispatch(login({ email }));
    navigate("/home");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title text-center text-md-start">Sign in</h2>
        <p className="new-user">
          New user? <a className="create-account" href="/register">Create an account</a>
        </p>
        <input
          className="login-input-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <span className="keep-signed">
          <input id="keep-signed-input" type="checkbox" /> 
          <label for="keep-signed-input">Keep me signed in</label>
        </span>
        <button className="login-button" type="submit">Login</button>
        <div className="or-container">
          <hr />
          <span className="or-text">Or Sign In With</span>
          <hr />
        </div>
        <div className="social-container-login">
        <SocialMedia/>
        </div>
      </form>
      <div className="d-none d-md-block">
        <img src={LoginImage} alt="Login" width="480px" />
      </div>
    </div>
  );
};

export default LoginForm;
