import { cursos } from "./data";
import CourseCard from "./CourseCard";
import './App.css'; 

function App() {
  return (
    <div className="main-container">
      <header className="header">
        <h1 className="title">CESDE<span>EDUCATIVO</span></h1>
        <p className="subtitle">Explora nuestra oferta académica para este semestre</p>
      </header>
      
      <main className="grid-cursos">
        {cursos.map((curso, index) => (
          <CourseCard 
            key={curso.id} 
            {...curso}
            
            index={index} 
          />
        ))}
      </main>

      <footer className="footer">
        <p>&copy; 2024 DevAcademy. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
