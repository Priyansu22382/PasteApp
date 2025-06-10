import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='navBar-container'>
        <NavLink
            to = "/"
            id='homeLink'
        >
            Home
        </NavLink>

        <NavLink
            to = "/pastes"
            id='pastesLink'
        >
            Pastes
        </NavLink>
    </div>
  )
}

export default NavBar
