import "./assets/styles/style.scss";
import React from "react";
import Home from './components/pages/Home/Home'
import Cart from './components/pages/Cart/Cart'
import Contacts from './components/pages/Contacts/Contacts'
import About from './components/pages/About/About'



import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/fake-store/" />
          <Route element={<Cart />} path="/fake-store/cart"/>
          <Route element={<Contacts />} path="/fake-store/contacts" />
          <Route element={<About />} path="/fake-store/about" />

          <Route path="/*" element={<div>404 not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
