import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./pages/pageStyle.css";
import "./mainStyle.css";
import "./components/componentsStyle.css";

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:");
    // Perform any necessary actions, such as sending the form data to an API or updating the state of the component
  };
  return (
    <div>
      <Register />
    </div>
  );
}
