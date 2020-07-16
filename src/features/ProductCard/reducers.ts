import { SET_PRODUCTS, IProduct } from './types'
import { ProductActions } from './actions'
export interface IProductState {
	products: IProduct[]
	error: []
	loading: boolean
}

const initState: IProductState = {
	products: [],
	error: [],
	loading: true,
}

export default (state = initState, action: ProductActions): IProductState => {
	switch (action.type) {
		case SET_PRODUCTS:
			return { ...state, loading: false, products: [...action.payload] }
		default:
			return state
	}
}
