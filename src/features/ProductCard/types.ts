export const SET_PRODUCTS: string = 'cards/LOAD_PRODUCTS'

export interface IProduct {
	id: number
	name: string
	image: string
  categoryId: number,
  description: string,
  price: number
}
