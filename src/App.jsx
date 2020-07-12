import React from 'react'
import './App.scss'
import { Switch, Route } from 'react-router-dom'
import { Home, About } from './pages'
import { Header,Footer } from './features'

export const App = () => {
	return (
		<div className="app">
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
			</Switch>
			<Footer />
		</div>
	)
}
