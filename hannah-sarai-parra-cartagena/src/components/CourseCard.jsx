const CourseCard = ({ info }) => {
    return (
        <div>
            <p>id: {info.id}</p>
            <h2>titulo: {info.titulo}</h2>
            <img src={info.imagen} alt={info.titulo} width={150} />
            <p>instruccion: {info.instruccion}</p>
            <p>Categoria: {info.categoria}</p>
            <p>duracion: {info.duracion}</p>
            <p>lecciones: {info.lecciones}</p>
            <p>nivel: {info.nivel}</p>
            <p>precio: {info.precio}</p>
            <p>calificacion: {info.calificacion}</p>
            <p>estudiante: {info.estudiante}</p>
            <p>descripcion cursos: {info.descripcion}</p>
        </div>
    )
}
export default CourseCard