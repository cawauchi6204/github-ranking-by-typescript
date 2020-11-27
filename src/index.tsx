import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from './theme/theme'
import { ThemeProvider } from '@material-ui/styles';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
