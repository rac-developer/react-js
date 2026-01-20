import './App.css'

// useApp... Es que viene tipado por defecto
// El useDispatch va a hacer las funciones que nosotros queramos llamar para poder actualizar el estado, en pocas palabras es para hacer algo
// El useSelector es la forma en la que vamos a poder traer los datos que esten dentro del estado, en pocas palabras es para seleccionar o traer algo
import { useAppDispatch, useAppSelector } from './app/hooks'

function App() {
  const tasksState = useAppSelector(state => state.tasks)
  // Es lo mismo que hacer un useState y verlo por consola, la diferencia es que si lo creo en otro componente voy a poder accerderlo
  console.log(tasksState)
  const dispatch = useAppDispatch()

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
