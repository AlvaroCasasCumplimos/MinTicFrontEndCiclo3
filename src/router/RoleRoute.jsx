import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';

export const RoleRoute = ({
  children,
  roles,
}) => {
  let location = useLocation();
  const {role,email} = useContext(AuthContext)

  const userHasRequiredRole = (email && roles.includes(role)) ? true : false;
 
  if (!role) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  if (role && !userHasRequiredRole) {
    return <Navigate to="/modules" state={{ from: location }} />;
  }
  return children;
};