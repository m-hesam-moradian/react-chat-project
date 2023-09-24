import React from "react";

const Searchbar = () => {
  return (
    <div>
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="search someone"
        />
        <div className="search-result-user">
          <img className="profile-img" src="/images/me.png" alt="" />
          hesam moradian
        </div>
        <div className="search-result-user">
          <img className="profile-img" src="/images/me.png" alt="" />
          hesam moradian
        </div>
      </form>
    </div>
  );
};
export default Searchbar;
