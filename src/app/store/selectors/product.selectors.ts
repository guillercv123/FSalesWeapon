import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SelectProductState} from '../reducers/product.reducers';

export const selectSelectedProduct = createFeatureSelector<SelectProductState>('SelectedProduct');

export const selectedProduct = createSelector(selectSelectedProduct, state => state.products);

