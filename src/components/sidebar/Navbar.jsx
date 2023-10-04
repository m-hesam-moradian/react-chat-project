import { signOut } from "firebase/auth";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { auth } from "../../firebase";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <h3 className="nav-logo">react chat</h3>
        <label className="search-icon" htmlFor="search">
          <BsSearch></BsSearch>
        </label>
        <div className="profile">
          <div className="acount">
            <img className="profile-img" src="/images/me.png" alt="" />
            {/* <div className="nav-name">hesam</div> */}
            <span>hesam</span>
          </div>
          <button onClick={()=>signOut(auth)} className="btn btn-secondary nav-btn " >Log out</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
