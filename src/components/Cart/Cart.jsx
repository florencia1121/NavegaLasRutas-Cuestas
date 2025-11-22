import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext)

  const totalPrice = cartItems.reduce((s, i) => s + i.price * i.qty, 0)

  if (!cartItems.length) return (
    <main className="main-container">
      <h2>Tu carrito está vacío</h2>
      <p><Link to="/">Volver al catálogo</Link></p>
    </main>
  )

  return (
    <main className="main-container">
      <h2>Carrito</h2>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-row">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-info">
                <strong>{item.title}</strong>
                <p>{item.qty} x ${Number(item.price).toLocaleString('es-AR')}</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <p><strong>Total: ${Number(totalPrice).toLocaleString('es-AR')}</strong></p>
      <div className="cart-actions">
        <button onClick={clearCart}>Vaciar carrito</button>
        <Link to="/">Seguir comprando</Link>
      </div>
    </main>
  )
}

export default Cart
