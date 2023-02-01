import React from 'react';
import ReactDOM from 'react-dom/client';
import { SearchContextProvider } from './context/Search';
import { ToggleContextProvider } from './context/Toggle';
import App from './App';
import './index.scss';
import { ItemContextProvider } from './context/Items';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchContextProvider>
      <ToggleContextProvider>
        <ItemContextProvider>
          <App />
        </ItemContextProvider>
      </ToggleContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);
