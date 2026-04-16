import { useEffect, useState } from 'react';
import CourseCard from '../components/home/CourseCard';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Loading from '../components/ui/Loading';
import { useCourseStore } from '../store/courseStore';
import './CourseManager.css';

const initialForm = {
  title: '',
  description: '',
  price: '',
  authorName: '',
  authorJob: '',
  authorCompany: '',
  thumbnail: '',
  authorAvatar: '',
};

function CourseManager() {
  const { courses, loading, fetchCourses, addCourse, editCourse, removeCourse } = useCourseStore();

  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  // INPUT
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const buildCreatePayload = () => ({
    ...form,
    rating: 0,
    reviews: 0,
  });

  const buildUpdatePayload = () => ({
    ...form,
  });

  const isFormValid = Object.values(form).every((v) => v !== '');

  // SUBMIT
  const handleSubmit = async () => {
    if (!isFormValid) {
      alert('Isi semua field!');
      return;
    }

    if (editingId) {
      const existing = courses.find((c) => c.id === editingId);
      const payload = {
        ...existing,
        ...buildUpdatePayload(),
      };

      await editCourse(editingId, payload);
    } else {
      await addCourse(buildCreatePayload());
    }

    resetForm();
  };

  // DELETE
  const handleDelete = async (id) => {
    await removeCourse(id);
  };

  // EDIT
  const handleEdit = (course) => {
    setEditingId(course.id);
    setForm({
      title: course.title || '',
      description: course.description || '',
      price: course.price || '',
      authorName: course.authorName || '',
      authorJob: course.authorJob || '',
      authorCompany: course.authorCompany || '',
      thumbnail: course.thumbnail || '',
      authorAvatar: course.authorAvatar || '',
    });
  };

  // RESET
  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  return (
    <div className="course-manager">
      {/* FORM INPUT*/}
      <div className="course-form">
        <h1>Manager Kelas</h1>

        <Input
          name="title"
          label="Judul Kelas"
          className="input-manager"
          value={form.title}
          onChange={handleInputChange}
        />
        <Input
          name="description"
          label="Deskripsi"
          className="input-manager"
          value={form.description}
          onChange={handleInputChange}
        />
        <Input
          name="price"
          label="Harga"
          className="input-manager"
          value={form.price}
          onChange={handleInputChange}
        />
        <Input
          name="authorName"
          label="Nama Pengajar"
          className="input-manager"
          value={form.authorName}
          onChange={handleInputChange}
        />
        <Input
          name="authorJob"
          label="Jabatan"
          className="input-manager"
          value={form.authorJob}
          onChange={handleInputChange}
        />
        <Input
          name="authorCompany"
          label="Perusahaan"
          className="input-manager"
          value={form.authorCompany}
          onChange={handleInputChange}
        />

        <Input
          name="thumbnail"
          label="Thumbnail URL"
          className="input-manager"
          value={form.thumbnail}
          onChange={handleInputChange}
        />

        {form.thumbnail && <img src={form.thumbnail} alt="preview" className="preview-img small" />}

        <Input
          name="authorAvatar"
          label="Author Avatar URL"
          className="input-manager"
          value={form.authorAvatar}
          onChange={handleInputChange}
        />

        {form.authorAvatar && (
          <img src={form.authorAvatar} alt="preview" className="preview-img avatar small" />
        )}

        <Button variant="primary" className="btn-submit" onClick={handleSubmit}>
          {editingId ? 'Update' : 'Submit'}
        </Button>

        {editingId && (
          <Button variant="primary-outline" className="btn-cancel" onClick={resetForm}>
            Batal
          </Button>
        )}
      </div>

      {/* COURSE GRID */}
      <div className="course-grid">
        {loading ? (
          <Loading variant="inline" />
        ) : courses.length === 0 ? (
          <p className="empty">Belum ada course.</p>
        ) : (
          courses.map((course) => (
            <div key={course.id} className="course-card-container">
              <CourseCard {...course} />

              <div className="course-card-btn">
                <Button variant="secondary" className="btn-edit" onClick={() => handleEdit(course)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="btn-edit"
                  onClick={() => handleDelete(course.id)}
                >
                  Hapus
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseManager;
