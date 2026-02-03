import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {addTask, editTask} from "../features/tasks/taskSlice"
import {v4 as uuid} from 'uuid'
import {useNavigate, useParams} from 'react-router'

const TaskForm = () => {
  
  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const dispatch = useDispatch()
  // Este hook nos permite cambiar de pagina
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector((state) => state.tasks)

  const handleChange = (e) => {
    // title: "hola mundo"
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(addTask({
        ...task,
        // Esto agrega un id unico a cada task
        id: uuid()
      }))
      navigate("/");
    }
  }

  useEffect(() => {
    if(params.id) {
      setTask(
        tasks.find((task) => task.id === params.id)
      )
     }
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          name="title" 
          type="text" 
          placeholder="title" 
          onChange={handleChange}
          value={task.title}
        />
        <textarea 
          name="description" 
          placeholder="description" 
          onChange={handleChange}
          value={task.description}
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  )
}

export default TaskForm