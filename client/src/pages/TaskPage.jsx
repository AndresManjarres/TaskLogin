import { useEffect } from "react";
import { useTasks } from "../context/TasksContext"
import TaskCard from "../components/TaskCard";

function TaskPage() {

  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.length === 0) return (<p>No hay tareas</p>);

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}

export default TaskPage