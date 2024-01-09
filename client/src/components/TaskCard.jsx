import { useTasks } from "../context/TasksContext"
import { Link } from "react-router-dom"

function TaskCard({ task }) {

  const { deleteTask } = useTasks()

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

      <header>
        <h2 className="text-2xl font-bold">{task.titulo}</h2>
      </header>

      <hr className="border-gray-500 border-1 my-4"/>

      <p className="text-slate-300">{task.descripcion}</p>
      <p className="text-blue-400 text-xs mt-2">{new Date(task.fecha).toLocaleDateString()}</p>

      <div className="flex gap-x-2 items-center mt-5">
        <Link to={`/task/${task._id}`} className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-s-md text-xs">
          Editar
        </Link>

        <button onClick={() => {
          deleteTask(task._id)
        }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-e-md text-xs">
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default TaskCard