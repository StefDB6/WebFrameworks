import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeProvider from './providers/ThemeProvider.tsx'
import PokemonProvider from './providers/PokemonProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ThemeProvider>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </ThemeProvider>

  </StrictMode>,
)
