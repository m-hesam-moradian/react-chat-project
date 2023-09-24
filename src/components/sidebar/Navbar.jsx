import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <h3 className="nav-logo">react chat</h3>
        <div className="profile">
          <div className="acount">
            <img className="profile-img" src="/images/me.png" alt="" />
            {/* <div className="nav-name">hesam</div> */}
          </div>
          <button className="btn btn-secondary nav-btn ">Log out</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
