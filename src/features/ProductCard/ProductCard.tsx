import React from 'react'
import './ProductCard.scss'
import plus from '../../assets/svg/plus.svg'

export const ProductCard: React.FC = () => {
	return (
		<div className="card">
			<div className="card__header">
				<figure className="card__figure">
					<img
						className="card__image"
						src="https://images.unsplash.com/photo-1505616485412-adfcd5561e31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
						alt="ice cream"
					/>
				</figure>
			</div>
			<div className="card__body">
				<h1 className="card__title">Title</h1>
				<p className="card__text text-grey">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
					minima fuga cum a aliquid odit non reprehenderit maxime nisi, rem
					soluta natus porro ducimus eveniet maiores, itaque consequuntur iusto
					sequi.
				</p>
			</div>
			<div className="card__footer">
				<div className="card__actions">
					<span className="card__price">2900</span>
					<button className="card__buy">
						<img className="card__plus" src={plus} alt="plus"/>
					</button>
				</div>
			</div>
		</div>
	)
}
