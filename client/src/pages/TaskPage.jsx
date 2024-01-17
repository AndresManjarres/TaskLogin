import { useEffect } from "react";
import { useTasks } from "../context/TasksContext"
import TaskCard from "../components/TaskCard";

function TaskPage() {

  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.length === 0) return (
        <p className="text-4xl text-center text-white opacity-70 p-4">
          No tienes tareas aún.
        </p>
  );

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}

export default TaskPage