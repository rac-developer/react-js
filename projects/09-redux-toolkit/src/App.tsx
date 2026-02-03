import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { useSelector } from "react-redux"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TaskList/>
    },
    {
      path: "/create-task",
      element: <TaskForm/>
    },
    {
      path: "/edit-task/:id",
      element: <TaskForm/>
    }
  ])

  const stateTaks = useSelector((state) => state.tasks)
  console.log(stateTaks);
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
