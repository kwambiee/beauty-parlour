import Axios from "axios";

const SETPRODUCTS = "react-app/redux/SETPRODUCTS";

export const setProducts = (products) => ({
  type: SETPRODUCTS,
  products,
});

const initialState = { brands: {} };

export const fetchProducts = () => async (dispatch) => {
  const apiData = await Axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const productsData = apiData.data;

  const brands = {};
  for (let i = 0; i < productsData.length; i += 1) {
    let brand_name = productsData[i].brand;
    if (brands[brand_name]) {
      brands[brand_name] = [...brands[brand_name], productsData[i]];
    } else {
      brands[brand_name] = [productsData[i]];
    }
  }

  dispatch(setProducts(brands));
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETPRODUCTS:
      return { ...state, brands: action.products };
    default:
      return state;
  }
};

export default brandReducer;
