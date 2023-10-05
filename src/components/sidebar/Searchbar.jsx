import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Searchbar = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [err, setErr] = useState("");

  const handleSearch = async (e) => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc.data);
      });
    } catch (err) {
      setErr(true);
    }
  };
  const handlekey = (e) => {
    e.code === "Enter" && handleSearch();
  };

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
      {err && <span> User not found!</span>}
      <div className="Contacts">
        {user && (
          <div className="Contacts-user">
            <img className="profile-img" src={user.photoURL} alt="" />
            <div className="user-info">
              <span className="User-name">{user.displayName}</span>
              <span className="user-lastword">see you</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Searchbar;
