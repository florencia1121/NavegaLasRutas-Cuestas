import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = ({ count }) => {
	const ctx = useContext(CartContext)
	const total = typeof count === 'number' ? count : ctx.getTotalCount()

	return (
		<div className="cart-widget">
			<img src="/cart.svg" alt="carrito" className="cart-icon" />
			<span className="cart-count">{total}</span>
		</div>
	)
}

export default CartWidget
