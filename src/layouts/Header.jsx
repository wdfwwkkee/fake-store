import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {

    const {cart} = useSelector(state => state)
    const {favorite} = useSelector(state => state)


    return (
        <div className='header'>
            <div className="logo">
                <Link to={'/fake-store/'} >LOGO</Link>
            </div>
            <div className="navBar">
                <div className="navItem">
                    <Link to={'/fake-store'} >Main</Link>
                </div>
                <div className="navItem">
                    <Link to={'/fake-store/contacts'}>Contacts</Link>
                </div>
                <div className="navItem">
                    <Link to={'/fake-store/about'}>About</Link>
                </div>
            </div>
            <div className="favorite">
                <Link to={'/fake-store/favorite'}>
                    <FavoriteBorderIcon sx={{color : 'white'}} />
                </Link>
                <span className='countFavorite'>{favorite.length}</span>
            </div>
            <div className="cart">
                <Link to={'/fake-store/cart'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                </Link>
                <span className='countCart'>{cart.length}</span>
            </div>
        </div>
    )
}

export default Header