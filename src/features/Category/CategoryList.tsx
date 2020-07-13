import React from 'react'
import { Category } from './Category.js'
import './Category.scss'

export const CategoryList: React.FC = () => {
	const numb = Array.from(new Array(7).fill().keys()).map(i => (i += 1))
	return (
		<div className="category__list">
			{numb.map((item, index) => (
				<Category key={index}>{item}</Category>
			))}
		</div>
	)
}
