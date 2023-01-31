import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { SearchContextProvider } from './hooks/useSearch';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>
);
