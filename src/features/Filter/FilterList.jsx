import React from 'react'
import { Filter } from './Filter'
import './Filter.scss'

export const FilterList = () => {
	const numb = Array.from(new Array(9).fill().keys()).map(i => (i += 1))
	return (
		<div className="filter-list">
			{numb.map((item, index) => (
				<Filter key={index}>Рекомендуем!</Filter>
			))}
		</div>
	)
}
