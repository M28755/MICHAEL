import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Style/blog.css'
import './Style/contact.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/Context/themeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>

  </StrictMode>,
)
