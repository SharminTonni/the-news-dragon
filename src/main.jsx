import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import AuthProvider from './Providers/AuthProvider';




ReactDOM.createRoot(document.getElementById('root')).render(

 
     <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
     </AuthProvider>

  
)
