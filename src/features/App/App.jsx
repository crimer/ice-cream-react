import React from 'react'
import './App.scss'
import { Header } from '../Header/Header.jsx'
import { Slider } from '../Slider/Slider.jsx'
import { CategoryList } from '../Categoriy/CategoryList'
import { Footer } from '../Footer/Footer'

export const App = () => {
	return (
		<div className="app">
			<Header/>
      <main className="main">
        <div className="container-1200">
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
      <Footer/>
		</div>
	)
}
