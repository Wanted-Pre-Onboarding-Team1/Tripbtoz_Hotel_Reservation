import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GlobalStyles from 'lib/styles/globalStyles';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
