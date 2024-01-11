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
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue('titulo', task.titulo);
        setValue('descripcion', task.descripcion);
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

        <textarea rows="3" placeholder="Descripcion" {...register("descripcion")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my2" />
        <div className="flex justify-center my-2">
          <button className="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded"> Guardar</button>
        </div>
      </form>
    </div>
  )
}

export default TaskFormPage