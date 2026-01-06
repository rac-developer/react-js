import {createSlice} from "@reduxjs/toolkit"



export const taskSlice = createSlice({
  // Estado inicial
  name: 'tasks',
  initialState: [],

  // Los reducers vamos a crear funciones para actualizar el estado
  reducers: {}
})

export default taskSlice.reducer