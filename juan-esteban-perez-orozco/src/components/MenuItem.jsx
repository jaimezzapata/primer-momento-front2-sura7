const MenuItem = ({ menu }) => {

    const { nombrePlato, descripcion, nivelPicante, precio, imagen } = menu;

    return (
        <div>
            <img src={imagen} alt={nombrePlato} width="150" />
            <h2>{nombrePlato}</h2>
            <p>{descripcion}</p>
            <p>Picante: {nivelPicante}</p>
            <p>Precio: ${precio}</p>
        </div>
    );
}

export default MenuItem;