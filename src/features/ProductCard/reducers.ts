import { SET_PRODUCTS, IProduct } from './types'
import { ProductActions } from './actions'
export interface IProductState {
	products: IProduct[]
	error: null
	loading: false
}

const initState: IProductState = {
	products: [],
	error: null,
	loading: false,
}

export default (state = initState, action: ProductActions): IProductState => {
	switch (action.type) {
		case SET_PRODUCTS:
			return { ...state, products: [...action.payload] }
		default:
			return state
	}
}
