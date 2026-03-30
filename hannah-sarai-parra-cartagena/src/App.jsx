
import './App.css'
import CourseCard from './components/CourseCard'
import { cursos } from './data.js'


function App() {
  
  return (
   <section>
      {
        cursos.map((info) => (
          <CourseCard info={info} />
        ))
      }
    </section>
  )
}
export default App
