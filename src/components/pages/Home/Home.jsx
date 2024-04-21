import React from 'react'
import Header from '../../../layouts/Header/Header'
import Footer from '../../../layouts/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <div>
          <main style={{minHeight : 750, color: 'white', textAlign: 'center', display : 'flex', alignItems : 'center', justifyContent : 'center', background : ' rgba(61, 61, 61, 0.984)'}}>
            MAGAZIN:/
          </main>
        </div>
        <Footer />
    </div>
  )
}

export default Home