import { useGlobalContext } from '../context/globalContext';
import { Navigate, useLocation } from 'react-router';

const ProtectedRoute = ({ children }) => {
  const { isLogin } = useGlobalContext();
  const location = useLocation();

  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
