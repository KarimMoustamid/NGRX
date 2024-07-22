import {createAction, createReducer, on} from "@ngrx/store";
import {state} from "@angular/animations";

export interface ProductsState {
  showProductCode: boolean
}

const initialState: ProductsState = {
  showProductCode: true
}
export const productsReducer = createReducer(initialState, on(createAction('[Product Page] Toggle Show Product Code'), (state) => ({ ...state, showProductCode: !state.showProductCode})))
