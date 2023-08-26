import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Theme from './Contexts/ThemeContext.jsx'
import { AuthContextProvider } from './Contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthContextProvider>
      <Theme>
         <App />
      </Theme>
    </AuthContextProvider>
    
  </React.StrictMode>,
)
