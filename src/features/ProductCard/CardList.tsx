import React, { useEffect } from 'react'
import { ProductCard } from './ProductCard'
import './ProductCard.scss'
import { useSelector, useDispatch } from 'react-redux'
import { IAppState } from '../../app/rootRedicer'
import { IProduct } from './types'
import { loadProducts } from './operations'

const CardList: React.FC = () => {
  const filterExist = (state: IAppState, p: IProduct) => {
		if (state.filter.filters.length === 0 ) {
			return state.product.products
		} else {
			return (
				state.filter.filters.includes(p.format) ||
        state.filter.filters.includes(p.taste) ||
        state.filter.filters.includes(p.new)

			)
		}
  }

  const dispatch = useDispatch()
	const prods: IProduct[] = useSelector((state: IAppState) =>
		state.product.products.filter(p => filterExist(state, p)),
	)
	const loading: boolean = useSelector(
		(state: IAppState) => state.product.loading,
	)

	useEffect(() => {
		dispatch(loadProducts())
	}, [])

	return (
		<div className="cards">
			<p className="cards__header">Мороженое</p>
			<div className="cards__body">
				{loading ? (
					<p>Загрузка...</p>
				) : (
					<>
						{prods.map((product, index) => (
							<ProductCard key={index} {...product} />
						))}
					</>
				)}
			</div>
		</div>
	)
}
export default CardList
