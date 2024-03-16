import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <nav>
        <Link to='featured' >Featured</Link>
        <Link to='new'>New</Link>
        <Outlet/>
    </nav>
    
  )
}
// outlet is used to render matching child route under set of   route;

export default Products;