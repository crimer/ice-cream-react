import { combineReducers } from 'redux'
import productReducer, { ProductState } from '../features/ProductCard'

export interface AppState {
	product: ProductState
}

export const rootReducer = combineReducers({
	product: productReducer,
})
