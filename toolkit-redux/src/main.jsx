import React from 'react'
import ReactDOM from 'react-dom/client'

import { store } from './store/store'
import { Provider } from 'react-redux'

import { App } from './App'
import { PokemonApp } from './PokemonApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  </React.StrictMode>,
)
