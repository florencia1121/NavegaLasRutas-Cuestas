import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/products'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProductById(id)
      .then(res => setItem(res))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Cargando detalle...</p>
  if (!item) return <p>Producto no encontrado.</p>

  const { addItem } = useContext(CartContext)

  return (
    <main className="main-container">
      <article className="item-detail">
        <img src={item.image} alt={item.title} className="item-image" />
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p><strong>${Number(item.price).toLocaleString('es-AR')}</strong></p>
          <ItemCount
            initial={1}
            stock={10}
            onAdd={(qty) => {
              addItem({ id: item.id, title: item.title, price: item.price, image: item.image }, qty)
            }}
          />
        </div>
      </article>
    </main>
  )
}

export default ItemDetailContainer
