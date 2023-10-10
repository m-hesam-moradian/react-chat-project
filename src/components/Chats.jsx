import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  let color=''
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  const [selectedColor, setSelectedColor] = useState("#007bff"); // Default color value
  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
  };
  document.documentElement.style.setProperty("--primary-color", selectedColor);






  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Use a switch-case statement to handle different cases
  switch (randomNumber) {
    case 1:
      color = "#be1f1f";
      break;
    case 2:
      color = "#be731f";
      break;
    case 3:
      color = "#b7be1f";
      break;
    case 4:
      color = "#4dbe1f";
      break;
    case 5:
      color = "#1fbe95";
      break;
    case 6:
      color = "#1f8fbe";
      break;
    case 7:
      color = "#1f43be";
      break;
    case 8:
      color = "#531fbe";
      break;
    case 9:
      color = "#9a1fbe";
      break;
    case 10:
      color = "#be1f79";
      break;
    default:
      console.log("Invalid random number");
      break;
  }
  document.documentElement.style.setProperty("--primary-color", color);





  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
      <label for="colorPicker">
        <div className="userChat">
          <input
            id="colorPicker"
            name="colorPicker"
            className="colorInput"
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
          />
          <div className="userChatInfo">
            <p>
              <label for="colorPicker">Select theme</label>
            </p>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Chats;
