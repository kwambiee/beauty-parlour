import axios from "axios";

const SHOWBRANDS = "react-app/redux/SHOWBRANDS";
const SHOWPRODUCTS = "react-app/redux/SHOWPRODUCTS";

export const showBrands = () => ({
  type: SHOWBRANDS,
  payload,
});

export const showProducts = () => ({
  type: SHOWPRODUCTS,
  payload,
});

export const makeupStore = () => async () => {
  const response = await axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const data = await response.data;
  console.log(data);
};
