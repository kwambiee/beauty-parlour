import brandReducer from "./BrandReducer";

describe("Test reducers, actions and components", () => {
  test("should return the initial state", () => {
    expect(brandReducer(undefined, {})).toEqual({ brands: {}, products: [] });
  });

  test("should handle SET_PRODUCTS", () => {
    const state = { brands: {} };
    const SETPRODUCTS = "react-app/redux/SETPRODUCT";
    const setProducts = () => ({
      type: SETPRODUCTS,
    });
    expect(brandReducer(state, setProducts)).toEqual({ brands: {} });
  });
  test("should handle ADD_PRODUCTS", () => {
    const state = { products: [] };
    const ADDPRODUCTS = "react-app/redux/ADDPRODUCT";
    const addproducts = () => ({
      type: ADDPRODUCTS,
    });
    expect(brandReducer(state, addproducts)).toEqual({ products: [] });
  });
});
