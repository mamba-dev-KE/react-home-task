import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  CheckedContextProvider,
  ItemContextProvider,
  SearchContextProvider,
  ToggleContextProvider,
} from './context';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchContextProvider>
      <ToggleContextProvider>
        <ItemContextProvider>
          <CheckedContextProvider>
            <App />
          </CheckedContextProvider>
        </ItemContextProvider>
      </ToggleContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);
