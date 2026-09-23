import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Pages/about.css'
import './Components/header.css'
import './Pages/skills.css'
import './Pages/contact.css'
import './Components/footer.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
