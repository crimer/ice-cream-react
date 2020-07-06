import React from 'react'
import ReactDOM from 'react-dom'
import './app/index.css'
import * as serviceWorker from './app/serviceWorker'
import { App } from './features/App/App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)

serviceWorker.unregister()
