import { useState } from "react"
import { useDispatch } from "react-redux"
import {addTask} from "../features/tasks/taskSlice"
import {v4 as uuid} from 'uuid'
import {useNavigate} from 'react-router'

const TaskForm = () => {
  
  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const dispatch = useDispatch()
  // Este hook nos permite cambiar de pagina
  const navigate = useNavigate()


  const handleChange = (e) => {
    // title: "hola mundo"
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
      ...task,
      // Esto agrega un id unico a cada task
      id: uuid()
    }))
    navigate("/")
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="title" onChange={handleChange}/>
        <textarea name="description" placeholder="description" onChange={handleChange}></textarea>
        <button>Save</button>
      </form>
    </div>
  )
}

export default TaskForm