import React, { useEffect, useState } from 'react'
import { service } from '../../../../service/service'
import Item from './Item/Item'

const ItemsList = () => {


    const [products, setProducts] = useState([])

    useEffect(()=> {

        const fetchData = async () => {

            const data = await service.getProducts();
            setProducts(data)

        }
        fetchData();


    }, 
    [setProducts])

    return (
        <div className='ProductList'>
            <div className="ProductContent">
                {products.map((item, index) => <Item key={item.id} index={index} item={item} />)}
            </div>
        </div>
    )
}

export default ItemsList