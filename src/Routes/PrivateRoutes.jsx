import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const auth = JSON.parse(localStorage.getItem('auth')) || { token: false };

  return (
    auth.token ? <Outlet /> : <Navigate to="/admin-login" />
  );
};

export default PrivateRoutes;
