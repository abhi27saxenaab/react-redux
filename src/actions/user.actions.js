import { SET_USER,SET_USER_DETAILS } from "../types/products.types";


export const getAllUser = () => {
  return async function (dispatch) {
    try {
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
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      dispatch(setUser(data));
      
    } catch (error) {
      console.error('Error fetching users:', error);
    }
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

export const setUserDetails = (user = null) => {
  if (user) {
    return {
      type: SET_USER_DETAILS,
      payload: user,
    };
  }
  return {
    type: SET_USER_DETAILS,
    payload: [],
  };
};
