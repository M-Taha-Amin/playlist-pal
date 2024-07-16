import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootswatch/dist/vapor/bootstrap.min.css';
import 'bootstrap/js/index.esm';
import App from './App';
import AppContextProvider from './context/AppContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
