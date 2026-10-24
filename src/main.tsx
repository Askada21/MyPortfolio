import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/cormorant-garamond/latin-400.css'
import '@fontsource/cormorant-garamond/latin-500.css'
import '@fontsource/dm-mono/latin-400.css'
import './styles/variables.css'
import './styles/global.css'
import './styles/animations.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
