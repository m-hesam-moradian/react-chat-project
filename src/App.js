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
      {/* <form action="/action_page.php" onSubmit={handleSubmit}>
        <label for="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" value="John" />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" value="Doe" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form> */}
      <Register />
    </div>
  );
}
