export const SET_PRODUCTS: string = 'cards/LOAD_PRODUCTS'

export interface IProduct {
	id: number
	name: string
	image: string
	new: string
	description: string
	price: number
	taste: string
	format: string
}
