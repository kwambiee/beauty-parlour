import React from "react";
import { useParams, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const BrandPage = () => {
  let params = useParams();
  const brandNames = useSelector((state) => state.brands.brands);
  console.log(brandNames[params.brandName]);

  return (
    <div>
      <p>{params.brandName}</p>
      <Outlet />
    </div>
  );
};
export default BrandPage;
