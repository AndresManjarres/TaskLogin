import axios from './axios';

export const getTasksR = () => axios.get("/task");

export const getTaskR = (id) => axios.get(`/task/${id}`)

export const createTaskR = (task) => axios.post("/task", task);

export const updateTaskR = (task) => axios.put(`/task/${task._id}`, task);

export const deleteTaskR = (id) => axios.delete(`/task/${id}`);
