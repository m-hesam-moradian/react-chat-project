import React, { useState } from "react";
import {db} from "../fire"

const Searchbar = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState('')
  const [err, setErr] = useState('')
  




  const handleSearch = () =>}




  const handlekey = e => {
    e.code === 'Enter' && handleSearch()
  }
  return (
    <div>
      <form className="search-form">
        <input
          onKeyDown={handlekey}
          onChange={e=>setUsername(e.target.value)}
          id="search"
          className="search-input"
          type="text"
          placeholder="search someone"
        />
      </form>
      <div className="Contacts">
      
        <div className="Contacts-user">
          <img className="profile-img" src="/images/me.png" alt="" />
          <div className="user-info">
            <span className="User-name">hesam moradian</span>
            <span className="user-lastword">see you</span>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Searchbar;
