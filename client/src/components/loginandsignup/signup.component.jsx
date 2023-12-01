import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginsignup.styles.scss";
import OAuthGoogle from "../google-auth/google-auth.component";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const api = "http://localhost:3000/api";

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`${api}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="auth__signup">
      <h2 className="auth__header">Sign Up</h2>

      <OAuthGoogle />

      <div className="auth__divider">
        <span>or</span>
      </div>

      <input
        id="username"
        type="text"
        placeholder="Full Name"
        className="auth__input"
        onChange={handleOnChange}
      />
      <input
        id="email"
        type="email"
        placeholder="E-mail"
        className="auth__input"
        onChange={handleOnChange}
      />
      <input
        id="password"
        type="password"
        placeholder="Password"
        className="auth__input"
        onChange={handleOnChange}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="auth__input"
        onChange={handleOnChange}
      />

      <div className="auth__checkbox">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">I agree to the Membership Terms</label>
      </div>

      <button onClick={handleSubmit} className="auth__submit-btn">
        SIGN UP
      </button>
    </div>
  );
};

export default Signup;
