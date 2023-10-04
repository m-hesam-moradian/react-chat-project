import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      <Navigate to="/" />;
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      console.log("Login Successful!");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="logo">react chat</h2>
        <p>made by M.Hesam.Moradian</p>
        <form onSubmit={handleSubmit} action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">sing in</button>
        </form>
        {err && <span>somthing went wrong</span>}

        <p>
          do you have an acount? <Link to='/register' className="login-link">register</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
