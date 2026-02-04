import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/taskSlice'

// El configureStore es la tienda o almacen de estado de redux, 
// es como definir un useState aparte de la aplicacion
export const store = configureStore({
  reducer: {
    tasks:tasksReducer,
  }
})

// Tipos derivados del store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
