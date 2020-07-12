import React from 'react'
import ReactDOM from 'react-dom'
import './app/index.css'
import * as serviceWorker from './app/serviceWorker'
import { App } from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { BrowserRouter } from 'react-router-dom'

let app = (
	<React.StrictMode>
		{/* <Provider store={store}> */}
			<BrowserRouter>
				<App />
			</BrowserRouter>
		{/* </Provider> */}
	</React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'))

serviceWorker.unregister()
