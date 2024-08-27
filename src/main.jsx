import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './Components/Body'
import Header from './Components/Header'
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body />
  </StrictMode>,
)
