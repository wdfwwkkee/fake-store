import React from 'react'
import Header from '../../../layouts/Header'
import Footer from '../../../layouts/Footer'
import ItemsList from './ItemList/ItemsList'

const Home = (props) => {
  return (
    <div>
        <Header />
        <ItemsList products={props.products} />
        <Footer />
    </div>
  )
}

export default Home