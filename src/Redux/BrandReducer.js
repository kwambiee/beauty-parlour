import Axios from "axios";

const SETPRODUCTS = "react-app/redux/SETPRODUCTS";
const ADDPRODUCTS = "react-app/redux/ADDPRODUCTS";

export const setProducts = (products) => ({
  type: SETPRODUCTS,
  products,
});
export const addProducts = (products) => ({
  type: ADDPRODUCTS,
  products,
});

const initialState = { brands: {}, products: [] };

export const fetchProducts = () => async (dispatch) => {
  const apiData = await Axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const productsData = apiData.data;

  const brands = {};
  for (let i = 0; i < productsData.length; i += 1) {
    const brandName = productsData[i].brand;
    if (brands[brandName]) {
      brands[brandName] = [...brands[brandName], productsData[i]];
    } else {
      brands[brandName] = [productsData[i]];
    }
  }

  dispatch(setProducts(brands));
  dispatch(addProducts(productsData));
};

export const fetchProduct = async (id) => {
  return await Axios.get(
    `http://makeup-api.herokuapp.com/api/v1/products/${id}`
  );
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETPRODUCTS:
      return { ...state, brands: action.products };
    case ADDPRODUCTS:
      return { ...state, products: action.products };
    default:
      return state;
  }
};

export default brandReducer;
