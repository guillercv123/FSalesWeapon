import {ActionReducerMap} from '@ngrx/store';
import {productsReducer, SelectProductState} from './reducers/product.reducers';

export interface AppState {
  productStore: SelectProductState
}

export const appReduces: ActionReducerMap<AppState> = {
  productStore: productsReducer
}
