import { createContext, useContext, useState } from "react";
import { createTaskR, getTasksR, deleteTaskR, getTaskR, updateTaskR } from "../api/tasks";

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

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskR(id);
      //Debe ser error 204
      if (res.status === 200) setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.log('Error al eliminar la tarea:', error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskR(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, task) => {
    try {
      await updateTaskR(id, task);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TasksContext.Provider value={{
      tasks,
      createTask,
      getTasks,
      deleteTask,
      getTask,
      updateTask
    }}
    >
      {children}
    </TasksContext.Provider>
  );
}
