import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Router.jsx'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from './context/ThemeContext.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
     <AuthProvider>
       <RouterProvider router={router} />
     </AuthProvider>
    
  </StrictMode>,
)
