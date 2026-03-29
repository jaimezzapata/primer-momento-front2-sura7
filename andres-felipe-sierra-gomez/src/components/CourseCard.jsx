import React from 'react';

export const CourseCard = ({ nombreCurso, profesor, horasSemanales, nivel, imagen }) => {
  return (
    <div className="course-card" style={styles.card}>
      <img src={imagen} alt={`Imagen del curso ${nombreCurso}`} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{nombreCurso}</h3>
        <p><strong>Profesor:</strong> {profesor}</p>
        <p><strong>Nivel:</strong> {nivel}</p>
        <p><strong>Dedicación:</strong> {horasSemanales} horas/semana</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #444',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    margin: '10px',
    backgroundColor: '#1a1a1a',
    color: '#e0e0e0',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    height: '150px',
    objectFit: 'cover',
  },
  content: {
    marginTop: '12px',
  },
  title: {
    fontSize: '1.2rem',
    margin: '0 0 10px 0',
    color: '#fff',
  },
};