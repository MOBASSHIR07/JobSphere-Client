import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  

    <AuthProvider>
      <Toaster/>
      <RouterProvider router={router} />

    </AuthProvider>


)
