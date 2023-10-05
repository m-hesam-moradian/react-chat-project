import React from "react";

const Contacts = () => {
  let situation = false;
  return (
    <div className="Contacts">
      <div className="Contacts-user">
        <img className="profile-img" src="/images/me.png" alt="" />
        <div
          className="user-info"
          onClick={() => {
            situation = !situation;
            console.log(situation);
          }}
        >
          <span className="User-name">hesam moradian</span>
          <span className="user-lastword">see you</span>
        </div>
      </div>
      <div className="Contacts-user">
        <img className="profile-img" src="/images/me.png" alt="" />
        <div className="user-info">
          <span className="User-name">hesam moradian</span>
          <span className="user-lastword">see you</span>
        </div>
      </div>
      <div className="Contacts-user">
        <img className="profile-img" src="/images/me.png" alt="" />
        <div className="user-info">
          <span className="User-name">hesam moradian</span>
          <span className="user-lastword">see you</span>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
