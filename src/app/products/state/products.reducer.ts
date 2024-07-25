import {createReducer, on} from "@ngrx/store";
import {ProductPageActions} from "./products.actions";

export interface ProductsState {
  showProductCode: boolean,
}

const initialState: ProductsState = {
  showProductCode: false,
}
export const productsReducer = createReducer(initialState, on(ProductPageActions.toggleShowProductCode, (state) => ({ ...state, showProductCode: !state.showProductCode})))
