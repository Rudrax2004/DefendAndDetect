
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './components/storage/auth.jsx'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).
render(
 <AuthProvider>
      <React.StrictMode>
      <GoogleOAuthProvider clientId='829875598179-tlqg8232655k6mgg7sj5nmar9mvt55i4.apps.googleusercontent.com'>
        
      <App />
        <ToastContainer
          autoClose = {3000}
          newestOnTop={false}
          draggable
          pauseOnHover
        />
     </GoogleOAuthProvider>

      </React.StrictMode>
 </AuthProvider>
)
