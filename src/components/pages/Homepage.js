import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrandStore } from "../../Redux/BrandReducer";

const HomePage = () => {
  const dispatch = useDispatch();
  const BrandNames = useSelector((state) => state);
  console.log(BrandNames);

  useEffect(() => {
    dispatch(BrandStore());
  }, []);
  return <div>HomePage</div>;
};
export default HomePage;
