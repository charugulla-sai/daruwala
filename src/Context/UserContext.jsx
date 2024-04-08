import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const userContext = createContext();

export function useUserContextValues() {
  return useContext(userContext);
}

export default function UserContext({ children }) {
  const [userLoggedIn, setUserLoggedIn] = useState(
    localStorage.getItem('auth-token')
  );
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyingUser, setVerifyingUser] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const signin = async () => {
      try {
        setVerifyingUser(true);
        setError(false);
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_SERVER}/user/signin`,
          {
            email: email,
            password: password,
          }
        );
        if (response.status !== 200) {
          throw new Error('Login attempt failed.');
        }
        localStorage.setItem('auth-token', response.data.access_token);
        setUserLoggedIn(localStorage.getItem('auth-token'));
        navigate('/');
      } catch (err) {
        setError(true);
        console.log(error, err.message);
      } finally {
        setVerifyingUser(false);
      }
    };

    if (submit) {
      signin();
      setSubmit(false);
    }
  }, [submit]);

  // useEffect(() => {
  //   if (!userLoggedIn) {
  //     navigate('/signin');
  //   }
  //   // return()=>console.log('navigation cleared');
  // }, [userLoggedIn]);

  const handlePopState = useCallback(() => {
    window.history.pushState(null, document.title, window.location.href);
    console.log('popstate');
  });

  useEffect(() => {
    // Check if the current route path is the one where you want to disable the back button
    if (location.pathname === '/' || location.pathname === '/signin') {
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', handlePopState);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, [location, handlePopState]);

  const verify = () => {
    const authToken = localStorage.getItem('auth-token');
    if (authToken) {
      const decodeToken = jwtDecode(authToken);
      const { exp } = decodeToken;
      const currentTime = new Date().getTime();
      if (exp * 1000 < currentTime) {
        localStorage.removeItem('auth-token');
        console.log(exp * 1000 - currentTime);
        navigate('/signin');
      }
    } else {
      navigate('/signin');
    }
    setUserLoggedIn(localStorage.getItem('auth-token'));
    return userLoggedIn;
  };

  return (
    <userContext.Provider
      value={{
        userLoggedIn,
        verifyingUser,
        setUserLoggedIn,
        error,
        submit,
        setSubmit,
        email,
        setEmail,
        password,
        setPassword,
        verify,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
