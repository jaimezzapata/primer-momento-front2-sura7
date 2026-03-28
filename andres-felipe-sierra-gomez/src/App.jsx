import React from 'react';
import { CourseCard } from './components/CourseCard';
import { coursesData } from './data';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Oferta Académica - DevAcademy</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        
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