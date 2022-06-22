import React from "react";
import { useSelector } from "react-redux";
import Brand from "../components/brand";
import Header from "../components/Header";
import "./pages.css";

const HomePage = () => {
  const brandNames = useSelector((state) => state.brands.brands);

  return (
    <>
      <div className='brandWrapper'>
        <div className='layer'>
          <div>
            <Header />
          </div>
          <div className='gridContainer'>
            {Object.keys(brandNames).map((brand, i) => (
              <Brand key={i} name={brand} products={brandNames[brand]} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
