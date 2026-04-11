const CourseCard = ({ curso }) => {
  return (
    <div className="card">
      <img src={curso.imagen} alt={curso.nombreCurso} />
      <h3>{curso.nombreCurso}</h3>
      <p>Profesor: {curso.profesor}</p>
      <p>Nivel: {curso.nivel}</p>
      <p>Horas: {curso.horasSemanales}h / semana</p>
    </div>
  );
};

export default CourseCard;