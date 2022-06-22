import React from "react";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import Brand from "../components/brand";
import Header from "../components/Header";
import "./pages.css";

const HomePage = () => {
  const brandNames = useSelector((state) => state.brands.brands);

  return (
    <>
      <div>
        <div
          className='layer'
          style={{
            backgroundImage: "url(/assets/makeup.jpg)",
            backgroundColor: "rgba(236, 76, 138, 0.9)",
          }}
        >
          <div>
            <Header />
          </div>
          <div className='gridContainer'>
            {Object.keys(brandNames).map((brand) => (
              <Brand key={uuid()} name={brand} products={brandNames[brand]} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
