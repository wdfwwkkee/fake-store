import React from 'react'
import Header from '../../../layouts/Header'
import CartList from './CartList/CartList'
import Footer from '../../../layouts/Footer'

const Cart = () => {
  return (
    <div className='Cart'>
        <Header />
        <CartList />
        <Footer />
    </div>
  )
}

export default Cart