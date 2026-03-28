import { productos } from "./data"
import ProductCard from "./components/ProductCard"

function App() {
  return (
    <div>
      <h1>Catálogo TechStore</h1>

      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          nombreProducto={producto.nombreProducto}
          precio={producto.precio}
          categoria={producto.categoria}
          imagen={producto.imagen}
        />
      ))}
    </div>
  )
}

export default App