// src/components/DestinationCard.jsx
const DestinationCard = ({ info }) => {
  return (
    <div className="card">
      <img src={info.imagenDinamica} alt={info.ciudad} style={{ width: '100%' }} />
      <h3>{info.ciudad}, {info.pais}</h3>
      <p>Duración: {info.duracionDias} días</p>
      <p>Precio: ${info.precioDolares} USD</p>
    </div>
  );
};

export default DestinationCard;
