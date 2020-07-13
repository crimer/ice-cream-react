import React from 'react'
import heart from '../../assets/svg/heart.svg'
import './Category.scss'

export const Category: React.FC = ({ children }) => {
	return (
		<div className="category">
			<div className="category__image">
				<img className="category__icon icon" src={heart} alt="heart" />
			</div>
			<p className="category__title">{children}</p>
		</div>
	)
}
