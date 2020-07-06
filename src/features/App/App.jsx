import React from 'react'
import './App.scss'
import { Header } from '../Header/Header.jsx'
import { Slider } from '../Slider/Slider.jsx'

export const App = () => {
	return (
		<main className="app">
			<Header/>
      <div className="main container">
        <div className="carousel">
          <Slider/>
        </div>
        <div className="categories">
          Категории
        </div>
        <div className="filters">
          Фильтры
        </div>
        <div className="cards">
          Карточки
        </div>
      </div>
		</main>
	)
}
