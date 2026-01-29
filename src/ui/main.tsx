import { createRoot } from 'react-dom/client'
import { useThemeStore } from './store/themeStore'
import App from './App'
import './styles/app.css'
import type { ThemeState } from '../shared/types'

// Listen for the initial message from the Figma plugin
window.onmessage = (event: MessageEvent) => {
  const theme = event.data.pluginMessage as Partial<ThemeState>
  useThemeStore.getState().initializeTheme(theme)

  const container = document.getElementById('app')
  if (container) {
    const root = createRoot(container)
    root.render(<App />)
  }

  // Only process the first message
  window.onmessage = null
}
