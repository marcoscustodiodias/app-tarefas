import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { ChakraProvider } from "@chakra-ui/react"
import { ListProvider } from './contexts/ListContext'

import { theme } from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ListProvider>
        <App />
      </ListProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
