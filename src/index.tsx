import React from 'react'
import ReactDOM from 'react-dom'
import './app/index.scss'
import * as serviceWorker from './app/serviceWorker'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { BrowserRouter } from 'react-router-dom'

let Root = () => (
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)

ReactDOM.render(<Root/>, document.getElementById('root'))

serviceWorker.unregister()
