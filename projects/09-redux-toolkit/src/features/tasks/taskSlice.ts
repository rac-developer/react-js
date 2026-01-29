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
  reducers: {}
})

export default taskSlice.reducer