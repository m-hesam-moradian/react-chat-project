import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./pages/pageStyle.css";
import "./mainStyle.css";
import "./components/componentsStyle.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

export default function App() {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  const ProteceRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <ProteceRoute>
                <Home />
              </ProteceRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
