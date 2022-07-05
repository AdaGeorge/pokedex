import React from 'react'
import './Navbar.css'
import { GoHome } from 'react-icons/go'
import { SiPokemon } from 'react-icons/si'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className= 'navbar'>
      <ul>
        <h2 className='centered-nav-logo'><SiPokemon/></h2>
        <li><NavLink className='home' to='/'><GoHome/></NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar