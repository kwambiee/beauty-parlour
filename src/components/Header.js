import React from "react";
import img from "./assets/makeup-cart.jpg";

export default function Header() {
  const myStyle = {
    backgroundImage:
      "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height: "200px",
    paddingRight: "30px",
    paddingTop: "3rem",
    fontSize: "20px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className='header' style={myStyle}>
      <h1>
        SUMMER SKIN <br />
        EDIT
      </h1>
      <button>SHOP NOW</button>
    </div>
  );
}
