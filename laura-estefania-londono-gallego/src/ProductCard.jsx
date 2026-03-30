// src/ProductCard.jsx
import './ProductCard.css'; // Opcional: si creas un archivo de estilos

function ProductCard({ nombre, precio, categoria, imagen }) {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={imagen} alt={nombre} className="product-image" />
      </div>
      <div className="product-info">
        <span className="product-category">{categoria}</span>
        <h2 className="product-name">{nombre}</h2>
        <p className="product-price">${precio}</p>
        <button className="btn-buy">Agregar al carrito</button>
      </div>
    </article>
  );
}

export default ProductCard;