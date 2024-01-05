import Task from "../models/task.models.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      //Para que solo muestre las tareas del usuario que esta logueado
      user: req.user.id,
    }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "Algo no va bien" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { titulo, descripcion, fecha } = req.body;

    console.log(req.user);
  
    const newTask = new Task({ 
      titulo, 
      descripcion, 
      fecha,
      //Para mandarle el usuario
      user: req.user.id,
     });
  
    const taskSaved = await newTask.save();
    res.json(taskSaved);
  } catch (error) {
    return res.status(500).json({ message: "Algo no va bien" });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");

    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
  
    res.json(task);
    
  } catch (error) {
    return res.status(404).json({ message: "Tarea No encontrada" });
  }
};

export const updateTasks = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
  
    res.json({message: "Tarea actualizada", task});
  } catch (error) {
    return res.status(404).json({ message: "Tarea No encontrada" });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
  
    res.json({message: "Tarea eliminada"});
  } catch (error) {
    return res.status(404).json({ message: "Tarea No encontrada" });
  }
};
