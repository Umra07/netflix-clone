import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GoogleOAuthProvider clientId="900077907898-366ou36ca123lhdumksbpoa8h0u84oja.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
    ,
  </GoogleOAuthProvider>,
);
