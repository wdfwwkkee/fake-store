import React from 'react'
import { Link } from 'react-router-dom'


import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCart } from '../../hooks/useCart';
import { useFavorite } from '../../hooks/useFavorite';
import NavBar from './NavBar/NavBar';

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {

    const cart = useCart();
    const favorite = useFavorite();

    return (
        <div className='header'>
            <div className="logo">
                <Link to={'/fake-store/'} >LOGO</Link>
            </div>
            <NavBar />
            <div className="userStore" style={{display : 'flex', gap : 20}}>
                <div className="favorite">
                    <Link to={'/fake-store/favorite'}>
                        {favorite.length !== 0 ?
                            <Badge color="secondary" badgeContent={favorite.length}>
                                <FavoriteIcon />
                            </Badge>

                            : <Badge color="secondary" showZero>
                                <FavoriteIcon />
                            </Badge>
                        }
                    </Link>
                </div>
                <div className="cart">
                    <Link to={'/fake-store/cart'}>
                        {cart.length !== 0 ?
                            <Badge color="secondary" style={{ fontSize: 20 }} badgeContent={cart.length}>
                                <ShoppingCartIcon />
                            </Badge>

                            : <Badge color="secondary" showZero>
                                <ShoppingCartIcon />
                            </Badge>
                        }
                    </Link>
                </div>
            </div>
            <div className="user">
                <Link to={'/fake-store/sign-up'}>Login</Link>
            </div>
        </div>
    )
}

export default Header