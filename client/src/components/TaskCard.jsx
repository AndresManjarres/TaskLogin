import { useTasks } from "../context/TasksContext"
import { Link } from "react-router-dom"

function TaskCard({ task }) {

  const { deleteTask } = useTasks()

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

      <header className="flex justify-between">
        <h2 className="text-2xl font-bold">{task.titulo}</h2>

        <div className="flex gap-x-2 items-center">
          <button onClick={() => {
            deleteTask(task._id)
          }}>
            Eliminar
          </button>

          <Link to={`/task/${task._id}`}>
            Editar
          </Link>
        </div>
      </header>

      <p className="text-slate-300">{task.descripcion}</p>
      <p>{new Date(task.fecha).toLocaleDateString()}</p>
    </div>
  )
}

export default TaskCard