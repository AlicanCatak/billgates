import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // App bileşenini import ediyoruz
import './index.css'; // Genel stil dosyasını import et

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
