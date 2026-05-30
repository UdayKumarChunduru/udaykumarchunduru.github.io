import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Apply saved theme before React renders — prevents flash
const saved = localStorage.getItem('ukc-theme') || 'dark'
document.documentElement.className = saved

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
