import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/ibm-plex-mono/latin-400.css'
import './styles/global.css'
import App from './App'
const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')
// Preserve previously shared HashRouter links, including Home section anchors.
if (location.hash.startsWith('#/')) {
  const legacy = location.hash.slice(2).replace(/^\/+/, '')
  history.replaceState(null, '', import.meta.env.BASE_URL + legacy)
}
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
