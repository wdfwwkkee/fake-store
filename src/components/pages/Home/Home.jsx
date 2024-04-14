import React from 'react'
import Header from '../../../layouts/Header'
import Footer from '../../../layouts/Footer'
import ItemsList from './ItemList/ItemsList'

const Home = () => {
  return (
    <div>
        <Header />
        <ItemsList />
        <Footer />
    </div>
  )
}

export default Home