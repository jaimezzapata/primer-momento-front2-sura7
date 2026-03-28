const DestinationCard = ({ pais, ciudad, duracionDias, precioDolares, imagenDinamica }) => {
  return (
    <div className="card">
      <img src={imagenDinamica} alt={ciudad} />
      <div className="card-content">
        <span className="duration">{duracionDias} días</span>
        <h3>{ciudad}, {pais}</h3>
        <p className="price">Precio: ${precioDolares} USD</p>
      </div>
    </div>
  );
};

export default DestinationCard;
