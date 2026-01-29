import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { useSelector } from "react-redux"

function App() {
  const stateTaks = useSelector((state) => state.tasks)
  console.log(stateTaks);
  return (
    <>
      <h1>Hello World</h1>
      <TaskForm/>
      <TaskList/>
    </>
  )
}

export default App
