import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// GET
export const getCourses = async () => {
  const res = await axios.get(`${API_URL}/courses`);
  return res.data;
};

// CREATE
export const createCourse = async (data) => {
  const res = await axios.post(`${API_URL}/courses`, data);
  return res.data;
};

// UPDATE
export const updateCourse = async (id, data) => {
  const res = await axios.put(`${API_URL}/courses/${id}`, data);
  return res.data;
};

// DELETE
export const deleteCourse = async (id) => {
  await axios.delete(`${API_URL}/courses/${id}`);
};
