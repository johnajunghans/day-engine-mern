import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { RoutineContextProvider } from './context/RoutineContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RoutineContextProvider>
        <App />
      </RoutineContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
