import { productos } from "./data";
import ProductCard from "./Components/ProductCard";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "10px", color: "#333" }}>
        Catálogo TechStore
      </h1>

      <p style={{ color: "#555", fontSize: "18px" }}>
        Explora nuestros productos tecnológicos en oferta
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          marginTop: "40px",
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
  );
}

export default App;
