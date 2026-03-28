

const ProductCard = ({ producto }) => {
    return (
        <div>
            <p>ID Producto: {producto.id}</p>
            <h2>Nombre Producto: {producto.name}</h2>
            <p>Categoria  {producto.category}</p>
            <p>Precio {producto.price}</p>
            <div>
                <img src={producto.image} alt={producto.name} />
            </div>
        </div>
    )
}
export default ProductCard;