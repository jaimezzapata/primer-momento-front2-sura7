
const TourCard = ({ info }) => {
    return (
        <div>
            <img src={info.imagen} alt={"Concierto en ${info.ciudad}"} />
            
            <div>
                <p><strong>ID:</strong> {info.id}</p>
                <h2>{info.ciudad}</h2>
                <p><strong>Fecha:</strong> {info.fecha}</p>
                <p><strong>Recinto:</strong> {info.recinto}</p>
                <p><strong>Estado:</strong> {info.estadoBoletas}</p>
            </div>
        </div>
    );
};

export default TourCard;