const url = 'http://localhost:3000/'

export const getProducts = async (): Promise<any> => {
	const res = await fetch(`${url}data.json`)

	const { products } = await res.json()
	return products
}

export const getCategories = async (): Promise<any> => {
	const res = await fetch(`${url}data.json`)
	const { categories } = await res.json()
	return categories
}

export const getCaruosel = async (): Promise<any> => {
	const res = await fetch(`${url}data.json`)
	const { caruosel } = await res.json()
	return caruosel
}
