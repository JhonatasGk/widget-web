import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthProvider } from './components/contexts/auth'

import './global.css'

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
 localStorage.theme = 'light'

  localStorage.theme = 'dark'

  localStorage.removeItem('theme')

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
