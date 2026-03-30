import { productos } from "./data"
import ProductCard from "./Components/ProductCard"

function App() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Catálogo TechStore</h1>
      <p>Productos tecnológicos en oferta</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
          marginTop: "30px"
        }}
      >
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
    </div>
  )
}

export default App