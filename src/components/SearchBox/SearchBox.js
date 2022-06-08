import React from "react";
import { useState } from "react";

const SearchBox = ({handleSearch}) => {
  const [textSearch, settextSearch] = useState("");
  
  const handleChange = (event) => {
    settextSearch(event.target.value);
  };

  return (
    <>
      <div className="field has-addons">
        <div className="control">
          <input onChange={handleChange} className="input" type="text" placeholder="Search" />
        </div>
        <div className="control">
          <p onClick={ ()=> handleSearch(textSearch)} className="button is-info has-background-grey-light">🔍</p>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
