import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../ui/Loading';
import Footer from './Footer';
import './MainLayout.css';
import Navbar from './Navbar';

function MainLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Navbar variant="main" />
      <main className="main-main">
        {loading && <Loading />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
