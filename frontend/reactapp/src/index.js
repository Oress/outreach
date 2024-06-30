import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './navbar/NavBar';
import App from './App';
import Contact from './common/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ProductCategories from './main/ProductCategories';
import ProfileLayout from './profile/ProfileLayout';
import Personal from './profile/Personal';
import { ReactKeycloakProvider } from '@react-keycloak/web'

import keycloak from './keycloak'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='contact-us' element={<Contact />} />
            <Route path='categories' element={<ProductCategories />} />
            <Route path='profile' element={<ProfileLayout />} >
              <Route path='personal' element={<Personal />} />
            </Route>
          </Route>
          {/* <Route element={<PageLayout />}>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Tos />} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </ReactKeycloakProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
