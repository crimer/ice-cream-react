import { combineReducers } from 'redux'
import productReducer, { IProductState } from '../features/ProductCard/index'

export interface IAppState {
	product: IProductState
}

export const rootReducer = combineReducers({
	product: productReducer,
})
