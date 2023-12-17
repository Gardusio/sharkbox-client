import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { disableReactDevTools } from "@fvilers/disable-react-devtools"
import enviroment from './config/config.js'


if (enviroment.NODE_ENV === "production") {
  console.log("REACT DEV TOOLS DISABLED")
  disableReactDevTools()
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
