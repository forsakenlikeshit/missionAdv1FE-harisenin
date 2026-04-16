import { create } from 'zustand';
import { createCourse, deleteCourse, getCourses, updateCourse } from '../services/api/courses';
import { useUIStore } from './uiStore';

export const useCourseStore = create((set, get) => ({
  courses: [],
  loading: false,
  error: null,

  fetchCourses: async () => {
    if (get().courses.length > 0) return;

    set({ loading: true, error: null });
    useUIStore.getState().startLoading();

    try {
      const data = await getCourses();
      set({ courses: data });
    } catch {
      set({ error: 'Gagal fetch courses' });
    } finally {
      set({ loading: false });
      useUIStore.getState().stopLoading();
    }
  },

  addCourse: async (course) => {
    useUIStore.getState().startLoading();
    try {
      const newCourse = await createCourse(course);
      set((state) => ({
        courses: [...state.courses, newCourse],
      }));
    } catch {
      set({ error: 'Gagal tambah course' });
    } finally {
      useUIStore.getState().stopLoading();
    }
  },

  editCourse: async (id, data) => {
    useUIStore.getState().startLoading();
    try {
      const updated = await updateCourse(id, data);
      set((state) => ({
        courses: state.courses.map((c) => (c.id === id ? updated : c)),
      }));
    } catch {
      set({ error: 'Gagal update course' });
    } finally {
      useUIStore.getState().stopLoading();
    }
  },

  removeCourse: async (id) => {
    useUIStore.getState().startLoading();
    try {
      await deleteCourse(id);
      set((state) => ({
        courses: state.courses.filter((c) => c.id !== id),
      }));
    } catch {
      set({ error: 'Gagal hapus course' });
    } finally {
      useUIStore.getState().stopLoading();
    }
  },
}));
