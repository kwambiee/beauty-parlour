/* eslint react/prop-types: 0 */
import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./brand.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BrushIcon from "@mui/icons-material/Brush";

const Brand = ({ name, products }) => (
  <div className='brands'>
    <div>
      <Link to={`/brands/${name}`}>
        <h1 className='productName'>{name}</h1>
        <div
          className='brushIcon'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <div style={{ paddingTop: "1rem" }}>
            {" "}
            <BrushIcon
              sx={{
                fontSize: "4rem",
                paddingTop: "12px ",
              }}
            />
          </div>

          <div className='productLength'>
            <h2>:{products.length}</h2>
          </div>
        </div>

        <div>
          <button
            style={{
              background: "transparent",
              fontFamily: "Karla, sans-serif",
              margin: "1rem 0px 1rem 0",
              color: "#fff",
              fontSize: "20px",
              padding: "0.8rem",
            }}
          >
            See Products{" "}
            <ArrowForwardIcon
              sx={{
                fontSize: "2rem",
                paddingTop: "12px ",
              }}
            />
          </button>
        </div>
      </Link>
    </div>
  </div>
);
Brand.propTypes = {
  name: propTypes.string.isRequired,
  products: propTypes.string.isRequired,
};

export default Brand;
