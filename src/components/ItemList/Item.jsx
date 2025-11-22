import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <article className="item-card">
      <img src={item.image} alt={item.title} className="item-image" />
      <h3>{item.title}</h3>
      <p>${Number(item.price).toLocaleString('es-AR')}</p>
      <Link to={`/detail/${item.id}`}>Ver detalle</Link>
    </article>
  )
}

export default Item
