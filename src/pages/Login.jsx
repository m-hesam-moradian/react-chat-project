import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/login");
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
        <p>
          do you have an acount? <span className="login-link">register</span>
        </p>
      </div>
    </div>
  );
};
export default Login;
