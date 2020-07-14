import React, { useEffect } from 'react'
import { ProductCard } from './ProductCard'
import './ProductCard.scss'
import { useSelector, useDispatch } from 'react-redux'
import { IAppState } from '../../app/rootRedicer'
import { IProduct } from './types'
import { loadProducts } from './operations'

const CardList: React.FC = () => {
	const prods: IProduct[] = useSelector(
		(state: IAppState) => state.product.products,
	)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadProducts())
	}, [])

	return (
		<div className="cards">
			<p className="cards__header">Мороженое</p>
			<div className="cards__body">
				{prods.map((product, index) => (
					<ProductCard key={index} {...product} />
				))}
			</div>
		</div>
	)
}
export default CardList
