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
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
