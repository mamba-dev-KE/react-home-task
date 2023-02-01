import React from 'react';
import ReactDOM from 'react-dom/client';
import { SearchContextProvider } from './context/Search';
import { ToggleContextProvider } from './context/Toggle';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchContextProvider>
      <ToggleContextProvider>
        <App />
      </ToggleContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);
