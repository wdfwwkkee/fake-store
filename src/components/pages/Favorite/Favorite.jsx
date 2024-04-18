import React from 'react'
import Header from '../../../layouts/Header/Header'
import Footer from '../../../layouts/Footer'
import FavoriteList from './FavoriteList/FavoriteList'

const Favorite = () => {
    return (
        <div className='Favorite'>
            <Header />
            <FavoriteList />
            <Footer />
        </div>
    )
}

export default Favorite