import Product from "../models/Product";
import { SET_PRODUCTS,SET_PRODUCTS2 } from "../types/products.types";

export const productsInitialState = [];

const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.payload];
    case SET_PRODUCTS2:
      return [...action.payload];
    default:
      return state;
  }
};

export default productsReducer;
