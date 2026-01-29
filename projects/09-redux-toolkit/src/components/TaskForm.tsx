import { useState } from "react"

const TaskForm = () => {
  
  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
  }

  return (
    <div>
      <form action="">
        <input name="title" type="text" placeholder="title" onChange={handleChange}/>
        <textarea name="description" placeholder="description" onChange={handleChange}></textarea>
        <button>Save</button>
      </form>
    </div>
  )
}

export default TaskForm
