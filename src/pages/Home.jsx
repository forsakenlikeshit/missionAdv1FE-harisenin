import { useEffect, useState } from 'react';
import CourseCard from '../components/home/CourseCard';
import Button from '../components/ui/Button';
import { getCourses } from '../services/api/Crud';
import './Home.css';

const tabs = ['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'];

function Home() {
  const [activeTab, setActiveTab] = useState('Semua Kelas');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  // FETCH COURSES
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const data = await getCourses();
        setCourses(data);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-txt">
          <h1 className="hero-title">
            Revolusi Pembelajaran: Temukan Ilmu Baru Melalui Platform Video Interaktif
          </h1>
          <p>
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran
            berkualitas tinggi.
          </p>
        </div>

        <Button variant="primary" className="btn-find">
          <a href="#top-videos">Temukan Video Course untuk Dipelajari!</a>
        </Button>
      </section>

      {/* TOP VIDEOS */}
      <section className="top-videos-section">
        <div className="top-videos-header">
          <h2 id="top-videos">Koleksi Video Pembelajaran Unggulan</h2>
          <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>

        <nav className="tabs-container">
          <div className="scroll-container">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>
      </section>

      {/* COURSE GRID */}
      <section className="course-grid">
        {loading && <p>Loading...</p>}

        {!loading && courses.length === 0 && <p className="empty">Belum ada course.</p>}

        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter-txt">
          <p>NEWSLETTER</p>
          <h2>Mau Belajar Lebih Banyak?</h2>
          <p>
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari
            program-program terbaik hariesok.id
          </p>
        </div>

        <form className="newsletter-form">
          <input className="newsletter-input" type="email" placeholder="Masukan Emailmu" />
          <Button variant="secondary" type="submit" className="btn-newsletter">
            Subscribe
          </Button>
        </form>
      </section>
    </>
  );
}

export default Home;
