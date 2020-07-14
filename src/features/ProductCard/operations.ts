import { setProducts } from './actions'
import { getProducts } from '../../common/api/api'

export const loadProducts = () => async (dispatch: any) => {
	const res = await getProducts()
	dispatch(setProducts(res))
}
