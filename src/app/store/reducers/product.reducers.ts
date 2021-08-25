import { createReducer, on} from '@ngrx/store';
import {ProductModel} from '../models/product.model';
import {requestProductAll} from '../actions/product.actions';

export interface SelectProductState {
  products: ProductModel[],
  loaded: boolean,
  loading: boolean
};

export const productInitialState: SelectProductState = {
  products: [],
  loaded: false,
  loading: false
};

const reduce = createReducer(productInitialState,
  on(requestProductAll, (state, {products}) => ({
      ...state,
      loading: false,
      loaded: true,
      products: [...products]
    })
  )
);

export function productsReducer(state, action) {
  return reduce(state, action);
}
