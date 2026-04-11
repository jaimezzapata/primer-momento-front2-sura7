import { cursos } from './data';
import CourseCard from './CourseCard';
import "./App.css"

function App() {
  return (
    <div className="container">
      <h1>Oferta Académica - DevAcademy</h1>
      <div className="grid-cursos">
        {cursos.map((item) => (
          <CourseCard key={item.id} curso={item} />
        ))}
      </div>
    </div>
  );
}

export default App;