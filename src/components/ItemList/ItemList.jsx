import React from 'react'
import Item from './Item'

const ItemList = ({ items = [] }) => {
  if (!items.length) return <p>No hay productos para mostrar.</p>

  return (
    <section className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  )
}

export default ItemList
