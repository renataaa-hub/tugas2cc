import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; // Impor file CSS
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);