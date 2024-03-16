import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const navLink= ({isActive})=>{
        return {
            fontWeight: isActive?'800':'300',
            textDecoration:isActive?'none':'underline',
            marginLeft: '8px'
        }
    }
  return (
    <nav style={{marginLeft:'8px'}}>
        <NavLink to='/' style={navLink}>Home</NavLink>
        <NavLink to='/about' style={navLink}>About</NavLink>
        <NavLink to='/products' style={navLink}>Products</NavLink>

    </nav>
  )
}

export default Nav