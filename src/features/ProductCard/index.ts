import reducer, * as state from './reducers'
export type IProductState = state.IProductState

export { loadProducts } from './operations'
export { SET_PRODUCTS } from './types'

export default reducer
