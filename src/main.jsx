import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { ProviderTask } from './context/contex'

createRoot(document.getElementById('root')).render(
  <ProviderTask>
    <App />
  </ProviderTask>,
)
