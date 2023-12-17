import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { disableReactDevTools } from "@fvilers/disable-react-devtools"
import dotenv from 'dotenv'

dotenv.config()

if (process.env.NODE_ENV === "production") disableReactDevTools()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
