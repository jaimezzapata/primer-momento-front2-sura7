function TourCard({ ciudad, fecha, recinto, estadoBoletas }) {
  return (
    <div className="card">
      <h2>{ciudad}</h2>
      <p>Fecha: {fecha}</p>
      <p>Recinto: {recinto}</p>
      <p>Boletas: {estadoBoletas}</p>
    </div>
  );
}

export default TourCard;