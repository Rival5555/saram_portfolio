import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Activate non-render-blocking Google Fonts stylesheet without inline HTML event handlers (CSP-safe)
const fontLink = document.getElementById('google-fonts-stylesheet') as HTMLLinkElement | null
if (fontLink && fontLink.media !== 'all') {
  fontLink.media = 'all'
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
