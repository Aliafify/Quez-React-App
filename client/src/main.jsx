import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'react-redux';
import reducer from './reducer';
import middleware from "./middleware";
import {createStore} from "redux";
const store = createStore(reducer,middleware)

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>

    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
