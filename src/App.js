import "./assets/styles/style.scss";
import React, { useEffect, useState } from "react";
import Home from './components/pages/Home/Home'
import Cart from './components/pages/Cart/Cart'
import Contacts from './components/pages/Contacts/Contacts'
import About from './components/pages/About/About'



import { BrowserRouter, Routes, Route } from "react-router-dom";
import { service } from "./service/service";


function App() {

  console.log("asd")
  const [products, setProducts] = useState([])


  useEffect(() => {

    async function fetchProducts () {
      const data = await service.getProducts()
      setProducts(data)
    }

    fetchProducts()


  }, [setProducts])
  
  console.log(products)


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home products={products} />} path="/fake-store/" />
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
