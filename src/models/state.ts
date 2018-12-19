import { Product } from "./product";

export interface ApplicationState {
  readonly products: Product.Model[];
}
