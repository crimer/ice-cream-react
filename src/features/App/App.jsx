import React from 'react'
import './App.scss'
import { Header } from '../Header/Header.jsx'
import { Slider } from '../Slider/Slider.jsx'
import { CategoryList } from '../Categoriy/CategoryList'

export const App = () => {
	return (
		<main className="app">
			<Header/>
      <div className="main container">
        <div className="carousel section">
          <Slider/>
        </div>
        <div className="categories section">
          <CategoryList/>
        </div>
        <div className="filters section">
          Фильтры
        </div>
        <div className="cards section">
          Карточки
        </div>
      </div>
		</main>
	)
}
