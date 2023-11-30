import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./loginsignup.styles.scss";

import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
import OAuthGoogle from "../google-auth/google-auth.component";

const Login = () => {
  const api = "http://localhost:3000/api";
  const [formData, setFormData] = useState({});
  const { error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch(`${api}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="auth__login">
      <h2 className="auth__header">Login</h2>

      <OAuthGoogle />

      <div className="auth__divider">
        <span>or</span>
      </div>

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

      <button onClick={handleSubmit} className="auth__submit-btn">
        LOGIN
      </button>
    </div>
  );
};

export default Login;
