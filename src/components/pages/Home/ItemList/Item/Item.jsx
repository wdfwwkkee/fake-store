import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../../../Slices/cart.slice';
import Price from '../../../../UI/Price';
import { Link } from 'react-router-dom';


const Item = ({ item }) => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state)

    const existingCartItemIndex = cart.findIndex((indexCart) => indexCart.id === item.id)
    const isExist = cart.some((itemCart) => itemCart.id === item.id)

    function toggleDecrement(item) {
        const index = cart.findIndex((product) => product.id === item.id);
        if (cart[index].quantity > 1) {
            dispatch(actions.decrementQuantity(item))
        } else {
            dispatch(actions.deleteFromCart(item))
        }
    }

    return (
        <div className='Item'>
            <div className="item-img">
                <img src={item.image} alt="" />
            </div>
            <div className="item-name">
                {item.name}
            </div>
            <div className="item-price">
                <Price price={item.price} />
            </div>
            <div className="item-readMore">
                <Link to={`/fake-store/product/${item.id}`} style={{ fontSize: 20, color: 'rgb(26, 123, 208)' }}>Read More</Link>
            </div>
            {isExist ?
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <button style={{ margin: 0 }} onClick={() => dispatch(actions.incrementQuantity(item))}>+
                    </button>
                    <div>{cart[existingCartItemIndex].quantity}</div>
                    <button style={{ margin: 0 }} onClick={() => toggleDecrement(item)} >-
                    </button>
                </div>
                : <button onClick={() => dispatch(actions.addToCart(item))}>Add to Cart</button>
            }
        </div>
    )
}

export default Item