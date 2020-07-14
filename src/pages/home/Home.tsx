import React from 'react'
import './Home.scss'
import { Slider, CardList, Filter } from '../../features'

export const Home: React.FC = () => {
	return (
		<>
			<div className="carousel section">
				<Slider />
			</div>
			<div className="catalog section">
				<Filter />
				<CardList />
			</div>

		</>
	)
}
