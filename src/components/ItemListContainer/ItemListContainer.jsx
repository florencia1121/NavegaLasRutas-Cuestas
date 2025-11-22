import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../data/products'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
	const { categoryId } = useParams()
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		// getProducts simula una llamada asíncrona que devuelve todos o filtrados por categoría
		getProducts(categoryId)
			.then(res => setItems(res || []))
			.finally(() => setLoading(false))
	}, [categoryId])

	return (
		<main className="main-container">
			<h1 className="catalog-title">Catálogo</h1>
			{greeting && <p>{greeting}</p>}

			{loading ? (
				<p>Cargando productos...</p>
			) : (
				<ItemList items={items} />
			)}
		</main>
	)
}

export default ItemListContainer
