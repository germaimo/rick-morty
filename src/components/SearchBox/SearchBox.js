import React from "react";
import { useState } from "react";
import styles from './searchbox.module.css'
import Card from 'react-animated-3d-card';

const SearchBox = ({handleSearch}) => {
  const [textSearch, settextSearch] = useState("");
  
  const handleChange = (event) => {
    settextSearch(event.target.value);
  };

  const handleKeyPress = (event) =>{
    if(event.key === 'Enter'){
      handleSearch(textSearch);
    }
  }

  const handleFocus = (e) =>{
    e.preventDefault();
    e.target.select();
  }

  return (
      <div className="field has-addons">
        <div className="control">
          <input onChange={handleChange} onFocus={handleFocus} onKeyPress={handleKeyPress} className={`input ${styles['fontSP']}`} type="text" placeholder="Search by name" />
        </div>
        <div className="control">
          <p onClick={ ()=> handleSearch(textSearch)} className="button is-info has-background-grey-light">🔍</p>
        </div>
      </div>
  );
};

export default SearchBox;
