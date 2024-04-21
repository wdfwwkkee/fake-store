import "./assets/styles/style.scss";
import React from "react";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
import Contacts from "./components/pages/Contacts/Contacts";
import About from "./components/pages/About/About";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductDetail from "./components/pages/Home/ItemList/Item/ProductDetail/ProductDetail";
import Favorite from "./components/pages/Favorite/Favorite";
import Products from "./components/pages/Products/Products";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/fake-store/" />
          <Route element={<Cart />} path="/fake-store/cart" />
          <Route element={<Contacts />} path="/fake-store/contacts" />
          <Route element={<About />} path="/fake-store/about" />
          <Route element={<Products />} path="/fake-store/products" />

          <Route element={<ProductDetail />} path="/fake-store/product/:id" />
          <Route element={<Favorite />} path="/fake-store/favorite" />

          <Route path="/*" element={<div>404 not Found <Link style={{color : 'blue', display : 'block'}} to={"/fake-store/"}>Back</Link></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
