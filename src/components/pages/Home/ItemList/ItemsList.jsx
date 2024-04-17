import React from 'react'
import Item from './Item/Item'

const ItemsList = (props) => {

    return (
        <div className='ProductList'>
            <div className="ProductContent">
                {props.products.map(item => <Item key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default ItemsList