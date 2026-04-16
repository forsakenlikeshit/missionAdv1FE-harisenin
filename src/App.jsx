import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './components/layouts/AuthLayout';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CourseManager from './pages/CourseManager';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/manager" element={<CourseManager />} />
        </Route>

        {/* AUTH LAYOUT */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
