import Product from "../models/Product";
import { SET_USER} from "../types/products.types";
export const productsInitialState = [];
const userReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return [...action.payload];
    
    default:
      return state;
  }
};
export default userReducer;
