import { Actions } from "../actions/product";
import { Product } from "../models/product";
import mockData from "../mock";
const initialState: Product.Model[] = mockData;
// Define initial state

const productReducer = (
  state: Product.Model[] = initialState,
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
