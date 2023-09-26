import React from "react";

const Searchbar = () => {
  return (
    <div>
      <form className="search-form">
        <input id="search"
          className="search-input"
          type="text"
          placeholder="search someone"
        />

      </form>
    </div>
  );
};
export default Searchbar;
