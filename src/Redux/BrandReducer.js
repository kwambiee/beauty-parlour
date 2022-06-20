import Axios from "axios";

const SETPRODUCTS = "react-app/redux/SETPRODUCTS";

export const setProducts = (products) => ({
  type: SETPRODUCTS,
  products,
});

const initialState = [];

export const fetchProducts = () => async (dispatch) => {
  const apiData = await Axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const productsData = apiData.data;
  const count = {};
  for (let i = 0; i < productsData.length; i += 1) {
    const { brand } = productsData[i];
    if (count[brand]) {
      count[brand] += 1;
    } else {
      count[brand] = 1;
    }
  }
  const productArray = Object.entries(count);
  // console.log(productArray);
  dispatch(setProducts(productArray));
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETPRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default brandReducer;
