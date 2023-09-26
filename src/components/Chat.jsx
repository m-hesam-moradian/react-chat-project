import React from "react";
import ChatNavbar from "./chatbar/ChatNavbar";
import Messages from "./chatbar/Messages";
import TypeInput from "./chatbar/TypeInput";

const Chat = () => {
  return (
    <div className="Chat">
      
      <ChatNavbar></ChatNavbar>
      <Messages></Messages>
      <TypeInput></TypeInput>
    </div>
  );
};
export default Chat;
