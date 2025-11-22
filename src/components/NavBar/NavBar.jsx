import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { getCategories } from '../../data/products'
import { CartContext } from '../../context/CartContext'

const NavBar = () => {
  const [categories, setCategories] = useState([])
  const { getTotalCount } = useContext(CartContext)

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  return (
    <header className="site-header">
      <div className="nav-inner">
        <div className="brand">
          <img src="/fotoinicial.jpg" alt="Tienda Saludable logo" className="site-logo" />
          <h1 className="site-title">Tienda Saludable</h1>
        </div>

        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Inicio</NavLink>
            </li>
            {categories.map(cat => (
              <li key={cat}>
                <NavLink to={`/category/${cat}`} className={({ isActive }) => isActive ? 'active' : ''}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/cart" aria-label="Ver carrito">
          <CartWidget count={getTotalCount()} />
        </Link>
      </div>
    </header>
  )
}

export default NavBar
