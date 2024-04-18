import React from 'react'
import CartItem from './CartItem/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import Price from '../../../UI/Price'
import { actions } from '../../../../Slices/cart.slice'
import { Link } from 'react-router-dom'

const CartList = () => {

  const { cart } = useSelector(state => state)

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
          <div style={{ color: 'white', display: 'flex', flexDirection: 'column', textAlign: 'center', gap: 10 }}>Ваша корзина пуста <Link style={{ textDecoration: 'underline' }} to={'/fake-store/'}>Перейти к покупкам</Link> </div>
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