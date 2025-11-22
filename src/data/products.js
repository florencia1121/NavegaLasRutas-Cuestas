// Mock data and async helpers (simulan llamadas a un servidor)
const products = [
  // Asegurate que las imágenes existan en la carpeta `public/` con estos nombres
  { id: '1', title: 'Almendras', price: 8000, category: 'dulces', description: 'Almendras naturales 250g', image: '/almendas.jpg' },
  { id: '2', title: 'Mix Salado', price: 6000, category: 'salados', description: 'Mezcla de frutos secos salados 200g', image: '/dulcesbarritas.jpg' },
  { id: '3', title: 'mezclas saludables', price: 30000, category: 'combos', description: 'Pack ahorro con 3 productos', image: '/combosmix.webp' },
  { id: '4', title: 'Nueces', price: 10000, category: 'dulces', description: 'Nueces premium 200g', image: '/nueces.jpeg' }
]

const simulateDelay = (result, delay = 600) =>
  new Promise((resolve) => setTimeout(() => resolve(result), delay))

export const getProducts = (categoryId) => {
  if (!categoryId) return simulateDelay(products)
  const filtered = products.filter(p => p.category === categoryId)
  return simulateDelay(filtered)
}

export const getProductById = (id) => {
  const prod = products.find(p => p.id === id)
  return simulateDelay(prod || null)
}

export const getCategories = () => {
  // devuelve las categorías únicas disponibles en el catálogo
  const cats = Array.from(new Set(products.map(p => p.category)))
  return simulateDelay(cats)
}

export default products
