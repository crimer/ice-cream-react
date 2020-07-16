import { combineReducers } from 'redux'
import productReducer, { IProductState } from '../features/ProductCard/index'
import filterReducer, { IFilterState } from '../features/Filter/index'
export interface IAppState {
	product: IProductState
	filter: IFilterState
}

export const rootReducer = combineReducers({
	product: productReducer,
	filter: filterReducer,
})
