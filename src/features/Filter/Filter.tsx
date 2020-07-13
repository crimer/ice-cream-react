import React from 'react'
import './Filter.scss'

export const Filter: React.FC = ({ children }) => {
	return (
		<div className="filter">
			<span className="filter-append"></span>
			<span className="filter-text">{children}</span>
			<span className="filter-prepend">&times;</span>
		</div>
	)
}
