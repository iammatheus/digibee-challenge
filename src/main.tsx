import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import '@/styles/globals.css'
import { enableMSW } from './api/mocks/index.ts'

enableMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
