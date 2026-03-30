function ProductCard({ nombreProducto, precio, categoria, imagen }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "16px",
        width: "220px",
        textAlign: "center",
        margin: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <img src={imagen} alt={nombreProducto}
      style={{ width: "100%" , borderRadius:
      "8px" }} />

      <h3>{nombreProducto}</h3>

      <p style={{ color: "#666" }}>{categoria}</p>

      <p style={{ fontWeight: "bold", color: "#1976d2" }}>
        ${precio.toLocaleString()}
      </p>
    </div>
  )
}

export default ProductCard
