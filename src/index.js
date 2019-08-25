import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { subscribe } from 'redux'
import { store } from './Redux/store'
import { Provider } from 'react-redux'

let rerender = (store) => {
   ReactDOM.render(
      <Provider store={store}>
         <App />
      </Provider>,
      document.getElementById('root'))
}

rerender(store)

store.subscribe(() => {
   rerender(store)
})
