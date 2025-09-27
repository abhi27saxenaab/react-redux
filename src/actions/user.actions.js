import { SET_USER } from "../types/products.types";


export const getAllUser = () => {
  return async function (dispatch) {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "asos2.p.rapidapi.com",
          "x-rapidapi-key":
            "1949ed3468msh573f2b5adccd778p14beffjsn12e69f0cac40",
        },
      }
    );
    const data = await res.json();
    dispatch(setUser(data));
  };
};
export const setUser = (users = null) => {
  if (users) {
    return {
      type: SET_USER,
      payload: users,
    };
  }

  return {
    type: SET_USER,
    payload: [],
  };
};
