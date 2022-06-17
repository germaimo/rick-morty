import React from "react";
import logo from "../../img/Rick-and-Morty.png";

const Logo = () => {
  return (<div className="column is-full is-flex is-justify-content-center">
    
      <img style={{ width: '40%', height: 'intrinsic' }} src={logo} alt="logo of rick and morty" />
   
  </div>);
};

export default Logo;
