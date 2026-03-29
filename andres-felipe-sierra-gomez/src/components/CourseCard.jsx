import React from 'react';
const getNivelColor = (nivel) => {
  switch (nivel.toLowerCase()) {
    case 'básico': return '#4caf50';
    case 'intermedio': return '#ff9800';
    case 'avanzado': return '#f44336';
    default: return '#ccc';
  }
};

export const CourseCard = ({ nombreCurso, profesor, horasSemanales, nivel, imagen }) => {
  return (
    <div
      className="course-card"
      style={{
        ...styles.card,
        borderBottom: `4px solid ${getNivelColor(nivel)}`
      }}
    >
      <img src={imagen} alt={`Imagen del curso ${nombreCurso}`} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{nombreCurso}</h3>
        <p style={styles.text}><strong>Profesor:</strong> {profesor}</p>
        <p style={styles.text}><strong>Nivel:</strong> {nivel}</p>
        <p style={styles.text}><strong>Dedicación:</strong> {horasSemanales} horas/semana</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '0',
    maxWidth: '320px',
    margin: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease', 
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '180px', 
    objectFit: 'cover',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  content: {
    padding: '16px 20px',
    marginTop: '0',
  },
  title: {
    fontSize: '1.4rem',
    margin: '0 0 12px 0',
    color: '#333',
    fontWeight: 'bold',
  },
  text: { 
    fontSize: '0.95rem',
    color: '#666', 
    margin: '6px 0',
  },
};