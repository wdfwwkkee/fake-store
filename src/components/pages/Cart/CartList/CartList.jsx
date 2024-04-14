import React from 'react'
import CartItem from './CartItem/CartItem'
import { useSelector } from 'react-redux'
import Price from '../../../UI/Price'

const CartList = () => {

  const { cart } = useSelector(state => state)

  let sum = 0;

  cart.forEach((element) => {
    sum += element.price * element.quantity;
  });

  return (
    <div className='CartList'>
      <div>
        {cart.map((itemCart, index) => <CartItem index={index} key={itemCart.id} item={itemCart} />)}
      </div>
      <div className="purchaseForm">
        <div className='total' style={{display : 'flex', gap : 10}}>Total : <Price price={sum} /></div>
        <button>Purchase</button>
      </div>
    </div>
  )
}

export default CartList