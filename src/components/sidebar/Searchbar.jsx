
import React, { useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Searchbar = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [err, setErr] = useState("");
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
          // console.log(user);
        }
        );
        setErr(false);
      } else {
        setErr(true);
      }
    } catch (err) {
      setErr(true);
      console.error(err);
    }
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    // console.log(currentUser);
    try {
      const res = await getDoc(doc(db, "chats",combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: combinedId.uid,
            displayName: combinedId.displayName,
            photoURL: combinedId.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        
      }
    } catch (err) {}
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          onChange={(e) => setUsername(e.target.value)}
          id="search"
          className="search-input"
          type="text"
          placeholder="search someone"
        />
      </form>
      {err && (
        <div className="Contacts">
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
