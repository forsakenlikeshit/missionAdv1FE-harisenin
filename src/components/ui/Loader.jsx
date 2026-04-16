import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useUIStore } from '../../store/uiStore';

function RouteLoader() {
  const location = useLocation();
  const { startLoading, stopLoading } = useUIStore();

  useEffect(() => {
    startLoading();

    const timer = setTimeout(() => {
      stopLoading();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

export default RouteLoader;
