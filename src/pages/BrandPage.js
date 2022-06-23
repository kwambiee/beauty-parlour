import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "../components/product";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BrandPage = () => {
  const params = useParams();
  const brandNames = useSelector((state) => state.brands.brands);
  const products = brandNames[params.brandName] || [];

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>
          <ArrowBackIcon />
        </button>
      </div>
      <div
        className='products'
        style={{ backgroundImage: "url(/assets/makeup.jpg)" }}
      >
        <p style={{ display: "none" }}>{params.brandName}</p>
        {products.map((product) => (
          <Product details={product} id={product.id} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default BrandPage;
