import React from 'react'
import './ProductCard.scss'
import plus from '../../assets/svg/plus.svg'
import { IProduct } from './types'
import { toCurrency } from '../../common/utils'

export const ProductCard: React.FC<IProduct> = product => {

	return (
		<div className="card card--white">
			<div className="card__header">
        {product.new && (
          <span className="card__mark card--new">Новинка</span>
        )}
				<figure className="card__figure">
					<img className="card__image" src={product.image} alt="ice cream" />
				</figure>
			</div>
			<div className="card__body">
				<p className="card__title">{product.name}</p>
			</div>
			<div className="card__footer">
				<div className="card__actions">
					<span className="card__price">{toCurrency(product.price)}</span>
					<button className="card__buy">
						<img className="card__plus" src={plus} alt="plus" />
					</button>
				</div>
			</div>
		</div>
	)
}
