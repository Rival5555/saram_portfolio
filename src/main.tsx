import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { THEME_STORAGE_KEY } from './utils/constants'
import { getInitialTheme } from './utils/helpers'

// Apply persisted or OS color theme immediately before React mounts (prevents theme flash)
const initialTheme = getInitialTheme(THEME_STORAGE_KEY)
document.documentElement.setAttribute('data-theme', initialTheme)
const metaTheme = document.querySelector('meta[name="theme-color"]')
if (metaTheme) {
  metaTheme.setAttribute('content', initialTheme === 'dark' ? '#111311' : '#F5F3ED')
}

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
