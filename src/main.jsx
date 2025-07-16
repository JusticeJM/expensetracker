import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ExpenseProvider } from './contexts/ExpenseContext.jsx'
import { UserProvider } from './contexts/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <ExpenseProvider>
          <UserProvider>
            <App />
          </UserProvider>
      </ExpenseProvider>
    </BrowserRouter>   
  </StrictMode>,
)
