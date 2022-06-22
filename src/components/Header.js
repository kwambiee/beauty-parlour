import React from "react";
import img from "./makeup.jpg";

const Header = () => {
  console.log(img);
  return (
    <div className='header'>
      <h1>
        DROP-DEAD <br />
        GORGEOUS
      </h1>
      <button type='button' className='button'>
        SHOP NOW
      </button>
    </div>
  );
};
export default Header;
