import React from 'react'
import './Home.scss'
import {
	Slider,
	CategoryList,
	FilterList,
} from '../../features'

export const Home = () => {
	return (
		<>

			<main className="main">
				<div className="container-1200">
					<div className="carousel section">
						<Slider />
					</div>
					<div className="categories section">
						<CategoryList />
					</div>
					<div className="filters section">
						<FilterList />
					</div>
					<div className="cards section">Карточки</div>
				</div>
			</main>

		</>
	)
}
