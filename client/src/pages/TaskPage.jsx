import { useEffect } from "react";
import { useTasks } from "../context/TasksContext"

function TaskPage() {

  const {getTasks, tasks} = useTasks();

  useEffect(() => {
    getTasks()
  }, [])

  if(tasks.length === 0) return (<p>No hay tareas</p>);

  return <div>
    {
      tasks.map(task => (
        <div key = {task._id}>
          <h2>{task.titulo}</h2>
          <p>{task.descripcion}</p>
        </div>
      ))
    }
  </div>
}

export default TaskPage