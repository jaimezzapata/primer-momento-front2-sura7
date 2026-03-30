import TechCard from './components/techcard'
import productos from './data'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="catalog-header">
        <div className="header-copy">
          <p className="eyebrow">Catálogo de Tienda de Tecnología</p>
          <h1>Encuentra tu próximo gadget</h1>
          <p className="subtitle">
            Descubre productos tecnológicos ideales para tu oficina, entretenimiento y trabajo diario.
          </p>
        </div>
      </header>

      <main className="product-grid">
        {productos.map((producto) => (
          <TechCard key={producto.id} producto={producto} />
        ))}
      </main>
    </div>
  )
}

export default App
