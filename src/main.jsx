import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tachyons'
import './containers/index.css'
import App from './containers/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
