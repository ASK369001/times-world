import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../reducers/authSlice";
import LoginImage from "../assets/login_vector.svg";

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
      setError("All fields are required.");
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
        <p>
          New user? <a href="/register">Create an account</a>
        </p>
        <input
          className="login-input-field"
          type="email"
          placeholder="Username or email"
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
      </form>
      <div className="d-none d-md-block">
        <img src={LoginImage} alt="Login" width="400px" />
      </div>
    </div>
  );
};

export default LoginForm;
