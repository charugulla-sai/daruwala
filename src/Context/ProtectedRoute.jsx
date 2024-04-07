import { Route, Navigate } from 'react-router-dom';
import { useUserContextValues } from './UserContext';

export function ProtectedRoute({ children }) {
  const { userLoggedIn } = useUserContextValues();

  return userLoggedIn ? <>{children}</> : <Navigate to="/signin" />;
}
