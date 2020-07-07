import React from 'react'
import './App.scss'
import { Header } from '../Header/Header.jsx'
import { Slider } from '../Slider/Slider.jsx'
import { CategoryList } from '../Category/CategoryList'
import { Footer } from '../Footer/Footer'
import { FilterList } from '../Filter/FilterList'

export const App = () => {
	return (
		<div className="app">
			<Header />
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
			<Footer />
		</div>
	)
}
