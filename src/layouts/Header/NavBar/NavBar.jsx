import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
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
    )
}

export default NavBar