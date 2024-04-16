import React from 'react'
import CartItem from './CartItem/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import Price from '../../../UI/Price'
import { actions } from '../../../../Slices/cart.slice'

const CartList = () => {

  const { cart } = useSelector(state => state)
  
  const dispatch = useDispatch();

  let sum = 0;

  cart.forEach((element) => {
    sum += element.price * element.quantity;
  });

  function purchase() {
    if (cart.length !== 0) {
      dispatch(actions.clearCart())
    }
    else {
      alert("cart is empty")
    }
  }

  return (
    <div className='CartList'>
      <div>
        {cart.map((itemCart, index) => <CartItem index={index} key={itemCart.id} item={itemCart} />)}
      </div>
      <div className="purchaseForm">
        <div className='total' style={{display : 'flex', gap : 10}}>Total : <Price price={sum} /></div>
      <button onClick={() => purchase()}>Purchase</button>
      </div>
    </div>
  )
}

export default CartList