import React from 'react'
import { Category } from './Category'
import './Category.scss'

export const CategoryList = () => {
	const numb = Array.from(new Array(7).fill().keys()).map(i => (i += 1))
	return (
		<div className="category-list">
			{numb.map((item, index) => (
				<Category>Рекомендуем!</Category>
			))}
		</div>
	)
}
