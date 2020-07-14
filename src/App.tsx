import React from 'react'
import './App.scss'
import { Switch, Route } from 'react-router-dom'
import { Home, About, Events, Delivery, Contacts } from './pages'
import { Header, Footer } from './features'

export const App: React.FC = () => {
	return (
		<div className="app">
			<Header />
			<main className="main">
        <div className="container-1200">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/events" exact component={Events} />
            <Route path="/delivery" exact component={Delivery} />
            <Route path="/contacts" exact component={Contacts} />
          </Switch>
        </div>
			</main>
			<Footer />
		</div>
	)
}
