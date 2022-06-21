import React from "react";
import { useParams, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const BrandPage = () => {
  let params = useParams();
  const brandNames = useSelector((state) => state.brands.brands);
  const brands = brandNames[params.brandName];
  console.log(brands);

  return (
    <div>
      {brands.map((brand) => {
        <div></div>;
      })}
      <p></p>
      <Outlet />
    </div>
  );
};
export default BrandPage;
