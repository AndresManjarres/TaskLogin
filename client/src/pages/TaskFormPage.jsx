import { useForm } from "react-hook-form"
import { useTasks } from "../context/TasksContext"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";

function TaskFormPage() {

  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask(){
      if (params.id) {
        const task =  await getTask(params.id);
        setValue('Titulo', task.titulo);
        setValue('descripcon', task.descripcion);
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate("/task");
  });

  return (
    <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Titulo" {...register("titulo")} autoFocus
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <textarea rows="3" placeholder="Descripcón" {...register("descripcion")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my2" />

        <button>Guardar</button>
      </form>
    </div>
  )
}

export default TaskFormPage