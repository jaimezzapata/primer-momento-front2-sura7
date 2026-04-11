import { destinos } from '../data';

const DestinationCard = () => {
  return (
    <div className="destination-grid">
      {destinos.map((destino) => (
        <div className="destination-card" key={destino.id}>
          <img src={destino.imagenDinamica} alt={destino.ciudad} />
          <h2>{destino.pais} - {destino.ciudad}</h2>
          <p>Duración: {destino.duracionDias} días</p>
          <p>Precio: ${destino.precioDolares} USD</p>
        </div>
      ))}
    </div>
  );
};

export default DestinationCard;