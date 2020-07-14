import React from 'react'
import './Home.scss'
import { Slider, FilterList, CardList } from '../../features'

export const Home: React.FC = () => {
	return (
		<>
			<div className="carousel section">
				<Slider />
			</div>
			{/* <div className="categories section">
				<CategoryList />
			</div> */}
			<div className="catalog section">
				<FilterList />
				<CardList />
			</div>

		</>
	)
}
