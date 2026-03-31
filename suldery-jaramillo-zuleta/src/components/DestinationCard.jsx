// src/components/DestinationCard.jsx
const DestinationCard = ({ info }) => {
  return (
    <div className="card">
      <img src={info.imagenDinamica} alt={info.ciudad} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />

      <div className="card-info">
        <h3>{info.ciudad}, {info.pais}</h3>
        <p>⏳ <strong>{info.duracionDias} días</strong> de aventura</p>
        <p>💰 Precio: <strong>${info.precioDolares} USD</strong></p>
        <button className="btn-reserva">Reservar Ahora</button>
      </div>
    </div>
  );
};

export default DestinationCard;