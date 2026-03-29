const ProductCard = ({ producto }) => {
    return (
<div className="card">
      <img src={producto.imagen} alt={producto.nombreProducto} />
      <div className="card-content">
        <span className="category-tag">{producto.categoria}</span>
        <h2>{producto.nombreProducto}</h2>
        <span className="price-tag">${producto.precio}</span>
      </div>
    </div>
    )
}
export default ProductCard;