

const ProductCard = ({ producto }) => {
    return (
 <div className="card">
      <div className="image-container">
        <img src={producto.imagen} alt={producto.nombreProducto} />
      </div>
      <div className="content">
        <span className="category">{producto.categoria}</span>
        <h2>{producto.nombreProducto}</h2>
        <span className="price">${producto.precio}</span>
      </div>
    </div>
    )
}
export default ProductCard;