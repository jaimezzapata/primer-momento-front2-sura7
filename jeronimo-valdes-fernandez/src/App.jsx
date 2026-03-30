import { useState } from "react";
import { cursos } from "./data";
import CourseCard from "./CourseCard";
import "./App.css";

function App() {
  const [busqueda, setBusqueda] = useState("");

  const cursosFiltrados = cursos.filter((curso) =>
    curso.nombreCurso.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="main-container">
      <header className="header">
        <h1 className="title">
  🎓 CESDE<span>EDUCATIVO</span>
</h1>
        <p className="subtitle">
          Explora nuestra oferta académica para este semestre
        </p>
      </header>

      <input
        type="text"
        placeholder="Buscar curso..."
        className="search-input"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <p style={{ textAlign: "center", marginBottom: "1rem", color: "#94a3b8" }}>
        Mostrando {cursosFiltrados.length} cursos
      </p>

      <main className="grid-cursos">
        {cursosFiltrados.map((curso, index) => (
          <CourseCard
            key={curso.id}
            {...curso}
            index={index}
          />
        ))}
      </main>

      {cursosFiltrados.length === 0 && (
        <p style={{ textAlign: "center", color: "#94a3b8" }}>
          No se encontraron cursos 😢
        </p>
      )}

      <footer className="footer">
        <p>&copy; 2024 DevAcademy. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;