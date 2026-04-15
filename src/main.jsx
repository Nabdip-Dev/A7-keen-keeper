import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" />
  </StrictMode>,
)
