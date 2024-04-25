import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{color : 'white', background : "rgba(30, 30, 30, 0.984)", height : '100vh', display : 'flex', alignItems: 'center', justifyContent : 'center'}} className='notFound'>
        This page is not found
        <Link to="/fake-store" style={{position : 'absolute', top : '50px', left : '50px',}}>Back</Link>
    </div>
  )
}

export default NotFound