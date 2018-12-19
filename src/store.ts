import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import { ApplicationState } from "./reducers/types";

// Add composeWithDevTools for Redux Dev Tools
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<ApplicationState>)
  )
);

export default store;
