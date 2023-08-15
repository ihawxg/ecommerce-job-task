import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { redirect } from 'react-router-dom';
import { UserProvider } from './context/user_context';

// Auth0
// domain : dev-ze2vb4khzgn3cb1j.eu.auth0.com
// id : CuGVTveWZiThxXoQbf8tEc1ksHHpm2rw


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri = {window.location.origin}
    cacheLocation='localstorage'
  >
    <React.StrictMode>
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </React.StrictMode>
  </Auth0Provider>
);

