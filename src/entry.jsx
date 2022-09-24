// Import React.
import React from 'react'
import ReactDOM from 'react-dom'

// Import our top-level component.
import App from './App.js'

// Mount our app.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#app'),
)
