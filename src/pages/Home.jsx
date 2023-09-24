import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <div className="home-container">
      
      <Sidebar></Sidebar>
      <Chat></Chat>
    </div>
  );
}
