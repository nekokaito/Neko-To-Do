import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auth from './provider/Auth.jsx'
import Private from './routes/Private.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth>
      <Private>
        <App />
      </Private>
    </Auth>
  </StrictMode>,
)
