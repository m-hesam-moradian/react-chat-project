import React from "react";
import Contacts from "./sidebar/Contacts.jsx";
import Navbar from "./sidebar/Navbar.jsx";
import Searchbar from "./sidebar/Searchbar.jsx";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Navbar></Navbar>
      <Searchbar></Searchbar>
      {/* <Contacts></Contacts> */}
    </div>
  );
};
export default Sidebar;
