import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Chargement…</div>}>
      <App />
    </Suspense>
  </StrictMode>
)
