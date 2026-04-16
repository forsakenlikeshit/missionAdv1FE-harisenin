import { Outlet } from 'react-router-dom';
import { useUIStore } from '../../store/uiStore';
import Loading from '../ui/Loading';
import Footer from './Footer';
import './MainLayout.css';
import Navbar from './Navbar';

function MainLayout() {
  const { isLoading } = useUIStore();

  return (
    <>
      <Navbar variant="main" />
      <main className="main-main">
        {isLoading && <Loading />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
