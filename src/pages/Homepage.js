import React from "react";
import { useSelector } from "react-redux";
import Brand from "../components/brand";
import Header from "../components/Header";
import "./pages.css";

const HomePage = () => {
  const brandNames = useSelector((state) => state.brands.brands);

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        {Object.keys(brandNames).map((brand, i) => (
          <Brand key={i} name={brand} products={brandNames[brand]} />
        ))}
      </div>
    </>
  );
};
export default HomePage;
