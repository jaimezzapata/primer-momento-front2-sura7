const TourCard = ({ info }) => {
    return (
        <div className="tour-card">
            <img src={info.imagen} alt={"Concierto en ${info.ciudad}"} />
            
            <div className="tour-card-content">
                <p><strong>ID:</strong> {info.id}</p>
                <h2>{info.ciudad}</h2>
                <p><strong>Fecha:</strong> {info.fecha}</p>
                <p><strong>Recinto:</strong> {info.recinto}</p>
                <p className="status"><strong>Estado:</strong> {info.estadoBoletas}</p>
            </div>
        </div>
    );
};

export default TourCard;