import React from 'react';
import { CourseCard } from './components/CourseCard';
import { coursesData } from './data';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Cursos Online Gratis</h1>

      <div
    className="courses-container"
    style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '30px',
    padding: '20px',
    maxWidth: '1100px', 
    margin: '0 auto'    
        }}
        >
        {coursesData.map((curso) => (
          <CourseCard
            key={curso.id}
            nombreCurso={curso.nombreCurso}
            profesor={curso.profesor}
            horasSemanales={curso.horasSemanales}
            nivel={curso.nivel}
            imagen={curso.imagen}
          />
        ))}
      </div>

    </div>
  );
}

export default App;