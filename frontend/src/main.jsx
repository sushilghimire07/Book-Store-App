import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';   // <-- IMPORT THIS
import './index.css';
import App from './App.jsx';
import AuthProvider from './context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AuthProvider>
    <div>
      <App/>
    </div>
    </AuthProvider>
  </BrowserRouter>
);

