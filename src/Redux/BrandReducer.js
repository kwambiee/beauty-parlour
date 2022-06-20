import axios from "axios";

const SETPRODUCTS = "react-app/redux/SETPRODUCTS";

export const setProducts = (products) => ({
  type: SETPRODUCTS,
  products,
});

export const fetchProducts = () => async (dispatch) => {
  await axios
    .get("http://makeup-api.herokuapp.com/api/v1/products.json")
    .then((response) => response.data)
    .then((response) => dispatch(setProducts(response.data)))
    .catch((error) => {
      console.error(error);
    });
};

const initialState = { brands: [] };

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETPRODUCTS:
      console.log(products);
      return { ...state, products: [...state.products, ...action.products] };
    // () => {
    //   let brands = {};

    //   action.products.map((prod) => {
    //     brands[prod.brand] = [...brands[prod.brand], prod];
    //   });
    //   console.log({ ...state, brands });
    //   return { ...state, brands };
    // };
    default:
      return state;
  }
};

export default brandReducer;
