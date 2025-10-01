import Product from "../models/Product";
import { SET_USER,SET_USER_DETAILS} from "../types/products.types";
export const productsInitialState = [];
const userReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      if(!state.userlist){
        return { ...state, userlist: [...action.payload] };
      }else{
        return { ...state, userlist: [...action.payload] };
      }
    case SET_USER_DETAILS:
      if(action.payload){
        return  { ...state, userdetails: action.payload };
      }else{
        return state;  
      }
    
    default:
      return state;
  }
};
export default userReducer;
