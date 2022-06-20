import Axios from "axios";

const SHOWBRANDS = "react-app/redux/SHOWBRANDS";
const SHOWPRODUCTS = "react-app/redux/SHOWPRODUCTS";
const SHOWFAILURE = "react-app/redux/SHOWFAILURE";

const initialState = { brands: [] };

export const showBrands = (brands) => ({
  type: SHOWBRANDS,
  brands,
});

export const showProducts = () => ({
  type: SHOWPRODUCTS,
  payload,
});

export const BrandStore = () => async (dispatch) => {
  await Axios.get("http://makeup-api.herokuapp.com/api/v1/products.json").then(
    (response) => dispatch(showBrands(response.data))
  );
};

// const ApiData = response.data;
// const brandcount = {};

// for (let i = 0; i < ApiData.length; i += 1) {
//   const { brand } = ApiData[i];
//   if (brandcount[brand]) {
//     brandcount[brand] += 1;
//   } else {
//     brandcount[brand] = 1;
//   }
// }
// for (const brand of ApiData) {
//   brandcount[brand] = brandcount[brand] ? brandcount[brand] + 1 : 1;
// }

// ApiData.map((product) => {
//   brandcount.brands[product.brand] = [
//     ...brandcount.brands[product.brand],
//     product,
//   ];
// });

const BrandReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOWBRANDS:
      return {
        ...state,
        brands: state.brands.map((brandCategory) => {
          state.brands[brandCategory.brand] = [
            ...state.brands[brandCategory.brand],
            brandCategory,
          ];
        }),
      };
    default:
      return state;
  }
};

export default BrandReducer;
