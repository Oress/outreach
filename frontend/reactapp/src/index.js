import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Cart from './components/profile/Cart';
import Contact from './components/common/Contact';
import ProductCategories from './components/main/ProductCategories';
import Personal from './components/profile/Personal';
import Wishlist from './components/profile/Wishlist';
import ProfileLayout from './components/profile/ProfileLayout';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Orders from './components/orders/Orders';
import NotFound from './components/common/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='contact-us' element={<Contact />} />
          <Route path='categories' element={<ProductCategories />} />
          <Route path='profile' element={<ProfileLayout />} >
            <Route path='personal' element={<Personal />} />
            <Route path='cart' element={<Cart />} />
            <Route path='orders' element={<Orders />} />
            <Route path='wishlist' element={<Wishlist />} />
          </Route>
        </Route>
        <Route path='*'  element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
        {/* <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route> */}
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();