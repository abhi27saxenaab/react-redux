import { combineReducers } from "redux";

import cartReducer from "./components/Cart/Cart.reducer";
import productsReducer from "./reducers/products.reducer";
import userReducer from "./reducers/users.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  users: userReducer,
});

export default rootReducer;
