import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./pages/pageStyle.css";
import "./mainStyle.css";
import "./components/componentsStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

export default function App() {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
