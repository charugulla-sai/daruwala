import { Route, Navigate } from 'react-router-dom';
import { useUserContextValues } from './UserContext';

export function ProtectedRoute({ children }) {
  const { userLoggedIn, verify } = useUserContextValues();
  verify();
  return userLoggedIn ? <>{children}</> : <Navigate to="/signin" />;
}
