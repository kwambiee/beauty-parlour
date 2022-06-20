import axios from "axios";

const SHOWBRANDS = "react-app/redux/SHOWBRANDS";
const SHOWPRODUCTS = "react-app/redux/SHOWPRODUCTS";

const initialState = { makeup: [] };

export const showBrands = () => ({
  type: SHOWBRANDS,
  payload,
});

export const showProducts = () => ({
  type: SHOWPRODUCTS,
  payload,
});

export const BrandStore = () => async () => {
  const response = await axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const data = await response.data;
  console.log(data);
};

const BrandReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOWBRANDS:
      return { makeup: [...action.payload] };
    default:
      return state;
  }
};

export default BrandReducer;
