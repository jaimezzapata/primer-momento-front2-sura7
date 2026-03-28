const ProductsCard = ({info})=>{
    return(
        <div>
            <p>ID Producto: {info.id}</p>
            <h2>Nombre Producto: {info.name}</h2>
            <img src={info.Image} alt={info.titulo} width={100} />
            <p>Categoria Producto: {info.category}</p>
            <p>Precio Producto: {info.price}</p>
            <p>Disponibilidad: {info.stock}</p>
            <p>Marca Producto {info.brand}</p>
            <p>Descripcion: {info.description}</p>
        </div>
    )
}

export default ProductsCard