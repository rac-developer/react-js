import {createSlice} from "@reduxjs/toolkit"

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Description 1",
    completed: false
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description 2",
    completed: true
  }
]

export const taskSlice = createSlice({
  // Estado inicial
  name: 'tasks',
  // Esto es lo mismo que initialState: initialState
  initialState,

  // Los reducers vamos a crear funciones para actualizar el estado
  reducers: {
    addTask: (state, action) => {
      console.log(state, action.type, action.payload)
      // Aqui  añadimos un objecto dentro del arreglo, aun que en react no usamos mucho el metodo de push. Este es un meetodo de javascript
      state.push(action.payload)
    }
  }
})
// Esto sirve para acceder a esta funcion desde cualquier parte de mi aplicacion
export const {addTask} = taskSlice.actions

export default taskSlice.reducer