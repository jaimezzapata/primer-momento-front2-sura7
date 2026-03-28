const DestinationCard = ({ info }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', margin: '10px', textAlign: 'center' }}>
      <img src={info.imagenDinamica} alt={info.ciudad} style={{ width: '100%', borderRadius: '5px' }} />
      <h2>{info.pais} - {info.ciudad}</h2>
      <p>Duración: {info.duracionDias} días</p>
      <p>Precio: ${info.precioDolares} USD</p>
    </div>
  );
};

export default DestinationCard;
