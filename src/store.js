import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import ReduxThunk from "redux-thunk";
//const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

export default store;
