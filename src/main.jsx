import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/reset.css'
import './style/index.css'
import Header from './components/header'
import Resume from './components/resume'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Resume />
  </StrictMode>,
)
