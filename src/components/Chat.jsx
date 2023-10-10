import React, { useContext, useState } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { BsCameraVideoFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { FiMoreHorizontal } from "react-icons/fi";

const Chat = () => {
  const { data } = useContext(ChatContext);



  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">

          <BsCameraVideoFill className="navbar-icon"></BsCameraVideoFill>
          <IoMdContact className="navbar-icon"></IoMdContact>
          <FiMoreHorizontal className="navbar-icon"></FiMoreHorizontal>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
