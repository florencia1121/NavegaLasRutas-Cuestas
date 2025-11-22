import React, { useState } from 'react'

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [qty, setQty] = useState(initial)

  const increase = () => setQty(q => Math.min(q + 1, stock))
  const decrease = () => setQty(q => Math.max(q - 1, 1))

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <button onClick={decrease} disabled={qty <= 1}>-</button>
        <span className="item-count-value">{qty}</span>
        <button onClick={increase} disabled={qty >= stock}>+</button>
      </div>
      <div className="item-count-actions">
        <button className="add-to-cart" onClick={() => onAdd && onAdd(qty)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
