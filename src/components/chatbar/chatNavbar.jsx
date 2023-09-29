import React from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";

const chatNavbar = () => {
  return (
    <div className="chatNavbar">
        <IoMdArrowBack className="navbar-icon back-sidebar"></IoMdArrowBack>
      <span className="navbar-name">hesam moradian</span>
      <div className="navbar-icons-container">
        <BsCameraVideoFill className="navbar-icon"></BsCameraVideoFill>
        <IoMdContact className="navbar-icon"></IoMdContact>
        <FiMoreHorizontal className="navbar-icon"></FiMoreHorizontal>
      </div>
    </div>
  );
};
export default chatNavbar;
