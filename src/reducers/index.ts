import { combineReducers, Reducer } from "redux";
import productReducer from "./product";
import { ApplicationState } from "../models/state";

// Combine reducers
const reducers: Reducer = combineReducers<ApplicationState>({
  // login: loginReducer,
  // register: registerReducer,
  products: productReducer
});

export default reducers;
