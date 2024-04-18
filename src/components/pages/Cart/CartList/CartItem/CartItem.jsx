import React from 'react'
import { useDispatch} from "react-redux"

import { actions } from '../../../../../Slices/cart.slice';
import Price from '../../../../UI/Price';

const CartItem = ({ item, index }) => {

    const dispatch = useDispatch();

    return (
        <div className='cartItem'>
            {index + 1} -
            <div className="cartItemImg">
                <img src={item.image} alt="" />
            </div>
            <div className="info">
                <div className="cartItem-name">
                    {item.name}
                </div>
                <div className="cartItem-price">
                    <Price price={item.price} />
                </div>
            </div>
            <div style={{display :'flex'}} className="actions">
                <button id='inc' onClick={() => dispatch(actions.incrementQuantity(item))}>+</button>
                <span>{item.quantity}</span>
                <button id='dec' onClick={() => dispatch(actions.decrementQuantity(item))}>-</button>
            </div>
            <button onClick={() => dispatch(actions.deleteFromCart(item))} className='DeleteItemCart'>X</button>
        </div>
    )
}

export default CartItem