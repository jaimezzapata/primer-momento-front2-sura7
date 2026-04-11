import './CourseCard.css'; // ¡Importante importar los nuevos estilos!

const CourseCard = ({ nombreCurso, profesor, horasSemanales, nivel, imagen, index }) => {
  
  // Mapeo de colores para los niveles
  const nivelColors = {
    "Básico": "#4ade80",      // Verde
    "Intermedio": "#fbbf24",  // Amarillo
    "Avanzado": "#f87171"     // Rojo
  };

  return (
    <div 
      className="card-container"
      // Usamos una variable CSS para el retraso de la animación
      style={{ '--animation-order': index }}
    >
      <div className="card-image-wrapper">
        <img src={imagen} alt={nombreCurso} className="card-image" />
        <div className="card-overlay"></div>
        <span 
          className="card-badge" 
          style={{ backgroundColor: nivelColors[nivel] || '#94a3b8' }}
        >
          {nivel}
        </span>
      </div>
      
      <div className="card-content">
        <h2 className="card-title">{nombreCurso}</h2>
        <p className="card-profesor">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="icon">
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
          </svg>
          {profesor}
        </p>
        
        <div className="card-footer">
          <p className="card-horas">
            <strong>{horasSemanales}</strong> horas/sem
          </p>
          <button className="card-button">Ver Detalles</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;