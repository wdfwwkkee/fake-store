import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import CartItem from './CartItem/CartItem'
import Price from '../../../UI/Price'
import { useCart } from '../../../../hooks/useCart'
import { actions } from '../../../../Slices/cart.slice'



const CartList = () => {

  const cart = useCart();

  const dispatch = useDispatch();

  let sum = 0;

  cart.forEach((element) => {
    sum += element.price * element.quantity;
  });

  function purchase() {
    dispatch(actions.clearCart())
  }

  return (
    <div className='CartList'>
      <div>
        {cart.length !== 0 ?
          cart.map((itemCart, index) => <CartItem index={index} key={itemCart.id} item={itemCart} />)
          :
          <div style={{ color: 'white', display: 'flex', flexDirection: 'column', textAlign: 'center', gap: 10, marginBottom : 20 }}>Ваша корзина пуста <Link style={{ textDecoration: 'underline' }} to={'/fake-store/'}>Перейти к покупкам</Link> </div>
        }
      </div>
      <div className="purchaseForm">
        <div className='total' style={{ display: 'flex', gap: 10 }}>Total : <Price price={sum} /></div>
        <button onClick={purchase}>Purchase</button>
      </div>
    </div>
  )
}

export default CartList