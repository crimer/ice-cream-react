export interface ProductState {
	data: []
	error?: null
	loading: false
}

const initState: ProductState = {
	data: [],
	error: null,
	loading: false,
}

const reducer = (state = initState, action): ProductState => {
	switch (action.type) {
		case value:
			break

		default:
			return state
	}
}
export default reducer
