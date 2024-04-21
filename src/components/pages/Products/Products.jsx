import React from 'react'
import ItemsList from '../Home/ItemList/ItemsList'
import Footer from '../../../layouts/Footer'
import Header from '../../../layouts/Header/Header'

const Products = () => {
  return (
    <div className='products'>
        <Header/>
        <ItemsList />
        <Footer />
    </div>
  )
}

export default Products