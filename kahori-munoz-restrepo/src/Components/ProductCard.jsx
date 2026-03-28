function ProductCard({ nombreProducto, precio, categoria, imagen }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "12px" }}>
      {imagen}
      <h3>{nombreProducto}</h3>
      <p>Categoría: {categoria}</p>
      <p>Precio: ${precio}</p>
    </div>
  )
}

 export default ProductCard