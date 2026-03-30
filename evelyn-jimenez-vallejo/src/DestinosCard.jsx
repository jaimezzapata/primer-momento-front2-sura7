// src/DestinosCard.jsx

// Usamos PascalCase (Criterio 4) [cite: 26, 27]
function DestinosCard({ viaje }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '10px', 
      padding: '15px', 
      margin: '10px', 
      width: '280px',
      textAlign: 'center' 
    }}>
      {/* Imagen dinámica (Criterio 5 y 6) [cite: 32, 40] */}
      <img 
        src={viaje.imagenDinamica} 
        alt={viaje.ciudad} 
        style={{ width: '100%', height: '180px', borderRadius: '5px', objectFit: 'cover' }} 
      />
      
      {/* Información del viaje (Criterio 6) [cite: 40] */}
      <h3>{viaje.pais} - {viaje.ciudad}</h3>
      <p>⏳ Duración: {viaje.duracionDias} días</p>
      <p>💰 Precio: <strong>${viaje.precioCOP.toLocaleString()} COP</strong></p>
    </div>
  );
}

export default DestinosCard;