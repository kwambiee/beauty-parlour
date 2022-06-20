import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const BrandNames = useSelector((state) => state);
  // console.log(BrandNames);

  return <div>HomePage</div>;
};
export default HomePage;
