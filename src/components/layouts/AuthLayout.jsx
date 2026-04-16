import { Outlet } from 'react-router-dom';
import { useUIStore } from '../../store/uiStore';
import Loading from '../ui/Loading';
import Navbar from './Navbar';

function AuthLayout() {
  const { isLoading } = useUIStore();

  return (
    <>
      <Navbar variant="auth" />
      <main className="auth-main">
        {isLoading && <Loading />}
        <Outlet />
      </main>
    </>
  );
}

export default AuthLayout;
