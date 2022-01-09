import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';
import GlobalStyle from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')

);