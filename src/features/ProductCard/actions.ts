import { SET_PRODUCTS,IProduct } from './types'

interface ISetProducts {
	type: typeof SET_PRODUCTS
	payload: IProduct[]
}

export const setProducts = (products: IProduct[]): ISetProducts => ({
	type: SET_PRODUCTS,
	payload: products,
})

export type ProductActions = ISetProducts
