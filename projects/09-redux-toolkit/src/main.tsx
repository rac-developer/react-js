import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from "react-redux"
import { store } from "./app/store.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* El Provider es donde va a ir a la app a consultar el estado de nuestra aplicacion */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
