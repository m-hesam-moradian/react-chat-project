import React, { useState } from "react";
import {  db } from "../../firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Searchbar = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [err, setErr] = useState("");
  const [currentUser]=useContext(AuthContext)

  const handleSearch = async (e) => {
    const q = +query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(user);
      });
    } catch (err) {
      setErr(true);
    }
  };
  const handlekey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect =async () => {
const combinedId=currentUser.uid>user.uid?currentUser.uid+user.uid:user.uid+currentUser.uid
    try {
  
      const res = await getDocs(db, "chats", combinedId);
      if (!res.exists()) {
        await setDoc(doc,(db,'chats',combinedId),{messages:[]})
      }
    } catch (err) {
      
     }
 }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="search-form"
      >
        <input
          onKeyDown={handlekey}
          onChange={(e) => setUsername(e.target.value)}
          id="search"
          className="search-input"
          type="text"
          placeholder="search someone"
        />
      </form>
      {err && (
        <div className="Contacts ">
          <div className="Contacts-user">
            <div className="user-info">
              <span className="User-name">User not found!</span>
            </div>
          </div>
        </div>
      )}
      <div className="Contacts search-contacts">
        {user && (
          <div onClick={handleSelect} className="Contacts-user">
            <img className="profile-img" src={user.photoURL} alt="" />
            <div className="user-info">
              <span className="User-name">{user.displayName}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Searchbar;
