import { useEffect, useState } from 'react';
import CourseCard from '../components/home/CourseCard';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { createCourse, deleteCourse, getCourses, updateCourse } from '../services/api/Crud';
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
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // FETCH COURSES
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const data = await getCourses();
      setCourses(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // INPUT HANDLER
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // BUILD PAYLOAD
  const buildPayload = () => ({
    title: form.title,
    description: form.description,
    price: form.price,
    authorName: form.authorName,
    authorJob: form.authorJob,
    authorCompany: form.authorCompany,
    thumbnail: form.thumbnail,
    authorAvatar: form.authorAvatar,
    rating: 0,
    reviews: 0,
  });

  // VALIDATION
  const isFormValid = Object.values(form).every((v) => v !== '');

  // SUBMIT (CREATE/UPDATE)
  const handleSubmit = async () => {
    if (!isFormValid) {
      alert('Isi semua field!');
      return;
    }

    const payload = buildPayload();

    if (editingId) {
      await updateCourse(editingId, payload);
    } else {
      await createCourse(payload);
    }

    await fetchCourses();
    resetForm();
  };

  // DELETE
  const handleDelete = async (id) => {
    await deleteCourse(id);
    await fetchCourses();
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

        <Input label="Judul Kelas" name="title" value={form.title} onChange={handleInputChange} />
        <Input
          label="Deskripsi"
          name="description"
          value={form.description}
          onChange={handleInputChange}
        />
        <Input label="Harga" name="price" value={form.price} onChange={handleInputChange} />
        <Input
          label="Nama Pengajar"
          name="authorName"
          value={form.authorName}
          onChange={handleInputChange}
        />
        <Input
          label="Jabatan"
          name="authorJob"
          value={form.authorJob}
          onChange={handleInputChange}
        />
        <Input
          label="Perusahaan"
          name="authorCompany"
          value={form.authorCompany}
          onChange={handleInputChange}
        />

        {/* IMAGE URL INPUT */}
        <Input
          label="Thumbnail URL"
          name="thumbnail"
          value={form.thumbnail}
          onChange={handleInputChange}
        />

        {form.thumbnail && (
          <img src={form.thumbnail} alt="thumbnail preview" className="preview-img small" />
        )}

        <Input
          label="Author Avatar URL"
          name="authorAvatar"
          value={form.authorAvatar}
          onChange={handleInputChange}
        />

        {form.authorAvatar && (
          <img src={form.authorAvatar} alt="avatar preview" className="preview-img avatar small" />
        )}

        <Button onClick={handleSubmit}>{editingId ? 'Update' : 'Submit'}</Button>

        {editingId && (
          <Button variant="secondary" onClick={resetForm}>
            Batal
          </Button>
        )}
      </div>

      {/* GRID */}
      <div className="course-grid">
        {loading && <p>Loading...</p>}

        {courses.map((course) => (
          <div key={course.id} className="course-card-container">
            <CourseCard {...course} />

            <div className="course-card-btn">
              <Button onClick={() => handleEdit(course)}>Edit</Button>
              <Button variant="danger" onClick={() => handleDelete(course.id)}>
                Hapus
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseManager;
