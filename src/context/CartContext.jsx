import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    // opcional: cargar carrito desde localStorage
    const raw = localStorage.getItem('cart')
    if (raw) setCartItems(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addItem = (product, qty = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i)
      }
      return [...prev, { ...product, qty }]
    })
  }

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id))
  }

  const clearCart = () => setCartItems([])

  const getTotalCount = () => cartItems.reduce((s, i) => s + i.qty, 0)

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart, getTotalCount }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
