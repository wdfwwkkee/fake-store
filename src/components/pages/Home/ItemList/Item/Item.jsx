import React from 'react'

import { useDispatch } from 'react-redux'
import { actions } from '../../../../../Slices/cart.slice';
import Price from '../../../../UI/Price';


const Item = ({ item }) => {


    const dispatch = useDispatch();

    return (
        <div className='Item'>
            <div className="item-img">
                <img src={item.image} alt="" />
            </div>
            <div className="item-name">
                {item.name}
            </div>
            <div className="item-price">
                <Price price={item.price}/>
            </div>
            <button onClick={() => dispatch(actions.addToCart(item))}>Add to Cart</button>
        </div>
    )
}

export default Item