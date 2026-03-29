function ProductCard({ nombreProducto, precio, categoria, imagen }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      width: "220px",
      textAlign: "center",
      margin: "10px"
    }}>
      <img src={imagen} alt={nombreProducto} style={{ width: "100%", borderRadius: "4px" }} />
      
      <h3>{nombreProducto}</h3>
      <p style={{ color: "#666" }}>{categoria}</p>
      <p><strong>${precio.toLocaleString()}</strong></p> 
    </div>
  );
}
export default ProductCard
