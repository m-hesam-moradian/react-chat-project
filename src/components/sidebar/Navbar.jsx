import { signOut } from "firebase/auth";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { auth } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);f
  return (
    <>
      <div className="Navbar">
        <h3 className="nav-logo">react chat</h3>
        <label className="search-icon" htmlFor="search">
          <BsSearch></BsSearch>
        </label>
        <div className="profile">
          <div className="acount">
            <img className="profile-img" src={currentUser.photoURL} alt="" />
            {/* <div className="nav-name">hesam</div> */}
            <span>{currentUser.displayName} </span>
          </div>
          <button
            onClick={() => signOut(auth)}
            className="btn btn-secondary nav-btn "
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
