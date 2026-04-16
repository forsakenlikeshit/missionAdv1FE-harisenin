import axios from './axios';

export const getCourses = async () => {
  const res = await axios.get('/courses');
  return res.data;
};

export const createCourse = async (data) => {
  const res = await axios.post('/courses', data);
  return res.data;
};

export const updateCourse = async (id, data) => {
  const res = await axios.put(`/courses/${id}`, data);
  return res.data;
};

export const deleteCourse = async (id) => {
  await axios.delete(`/courses/${id}`);
};
