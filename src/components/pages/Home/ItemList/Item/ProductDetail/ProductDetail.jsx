import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { actions } from '../../../../../../Slices/cart.slice'
import { useCart } from '../../../../../../hooks/useCart'

import { service } from '../../../../../../service/service'
import Header from '../../../../../../layouts/Header/Header'
import Footer from '../../../../../../layouts/Footer'
import Price from '../../../../../UI/Price'

import CircularProgress from '@mui/material/CircularProgress';


const ProductDetail = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})

    const cart = useCart();
    const dispatch = useDispatch()

    const existingCartItemIndex = cart.findIndex((indexCart) => indexCart.id === product.id)
    const isExist = cart.some((itemCart) => itemCart.id === product.id)

    function toggleDecrement(item) {
        const index = cart.findIndex((product) => product.id === item.id);
        cart[index].quantity > 1 ? dispatch(actions.decrementQuantity(item)) : dispatch(actions.deleteFromCart(item))
    }

    useEffect(() => {

        if (!id) return

        async function fetchProduct() {
            const data = await service.getProductsById(id)
            setProduct(data)
        }

        fetchProduct()

    }, [id])


    if (!product.id) return (
        <div className='CarDetail'>
            <Header />
            <main>
                <CircularProgress sx={{
                    color: 'rgba(30, 30, 30, 0.984)'
                }}
                />
            </main>
            <Footer />
        </div>

    )


    return (
        <div className='CarDetail'>
            <Header />
            <main>
                <div className="back">
                    <Link to={'/fake-store/'}>BACK</Link>
                </div>
                <div className="CarDetail-img">
                    <img src={product.image} alt="" />
                    <div className="CarDetail-desc">
                        {product.desc}
                    </div>
                </div>
                <div className="CarDetail-info">
                    <div className="CarDetail-name">
                        {product.name}
                    </div>
                    <div className="CarDetail-price">
                        <Price price={product.price} />
                    </div>
                    {isExist ?
                        <div style={{ display: 'flex', gap: 10 }}>
                            <button style={{ margin: 0 }} onClick={() => dispatch(actions.incrementQuantity(product))}>+
                            </button>
                            <div>{cart[existingCartItemIndex].quantity}</div>
                            <button style={{ margin: 0 }} onClick={() => toggleDecrement(product)} >-
                            </button>
                        </div>
                        : <button onClick={() => dispatch(actions.addToCart(product))}>Add to Cart</button>
                    }
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ProductDetail