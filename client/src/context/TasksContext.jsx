import { createContext, useContext, useState } from "react";
import {createTaskR, getTasksR} from "../api/tasks";

const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks debe estar dentro del proveedor TasksProvider");
  }

  return context;
}

export function TasksProvider({ children }) {

  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksR();
      setTasks(res.data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  }
  
  const createTask = async (task) => {
    try {
      const res = await createTaskR(task); // Utiliza 'task' en lugar de 'tasks'
      console.log(res);
      // Lógica adicional para manejar la respuesta después de crear la tarea
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      // Lógica para manejar el error al crear la tarea
    }
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      createTask,
      getTasks
    }}
    >
      {children}
    </TasksContext.Provider>
  );
}
