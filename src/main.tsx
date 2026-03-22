import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,


<StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <App />
       <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: 40,
        }}
        toastOptions={{
          duration: 5000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            maxWidth: '500px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
          success: {
            iconTheme: { primary: '#10b981', secondary: 'white' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: 'white' },
          },
        }}
      />
        {/* </AuthProvider> */}
    </BrowserRouter>
  </StrictMode>

)
