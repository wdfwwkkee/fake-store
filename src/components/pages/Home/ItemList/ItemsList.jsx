import React, { useEffect, useState } from 'react'
import { service } from '../../../../service/service'
import Item from './Item/Item'

const ItemsList = (props) => {

    return (
        <div className='ProductList'>
            <div className="ProductContent">
                {props.products.map((item, index) => <Item key={item.id} index={index} item={item} />)}
            </div>
        </div>
    )
}

export default ItemsList