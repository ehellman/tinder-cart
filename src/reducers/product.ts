/**
 * @module formReducer
 * @description Reducer for Login and Registration Forms
 */

import { Actions } from "../actions/product";
import { Product } from "../models/product";
import mockData from "../mock";
const initialState: Product.Model[] = mockData;
// Define initial state

const productReducer = (
  state: Product.Model[],
  action: any
): Product.Model[] => {
  switch (action.type) {
    case Actions.AddToWishList: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
