function TechCard({ producto }) {
  const { nombreProducto, precio, categoria, imagen } = producto

  return (
    <article className="tech-card">
      <div className="card-image">
        <img src={imagen} alt={nombreProducto} />
      </div>
      <div className="card-body">
        <span className="card-category">{categoria}</span>
        <h2>{nombreProducto}</h2>
        <p className="card-price">COP {precio.toLocaleString('es-CO')}</p>
        <button className="card-button">Ver producto</button>
      </div>
    </article>
  )
}

export default TechCard
