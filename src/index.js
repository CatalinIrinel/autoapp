import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { myTheme } from './chakratheme/theme';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ChakraProvider>
  </React.StrictMode>
);
