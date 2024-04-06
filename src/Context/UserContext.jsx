import { createContext, useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import Signin from '../Components/Signin/Signin';
import axios from 'axios';

const userContext = createContext();

export function useUserContextValues() {
  return useContext(userContext);
}

export default function UserContext({ children }) {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const signin = async () => {
      try {
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
        setUserLoggedIn(true);
        localStorage.setItem('auth-token', response.data.access_token);
        localStorage.setItem('isUserLoggedIn', true);
        // navigate('/');
      } catch (err) {
        setError(true);
        console.log(error, err.message);
      }
    };

    if (submit) {
      signin();
      setSubmit(false);
    }
  }, [submit]);

  useEffect(() => {
    navigate('/');
    if (!userLoggedIn) {
      navigate('/signin');
    }
    // return()=>console.log('navigation cleared');
  }, [userLoggedIn]);

  useEffect(() => {
    // Check if the current route path is the one where you want to disable the back button
    if (location.pathname === '/' || location.pathname === '/signin') {
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', () => {
        window.history.pushState(null, document.title, window.location.href);
      });
    }
  }, [location]);

  return (
    <userContext.Provider
      value={{
        userLoggedIn,
        setUserLoggedIn,
        error,
        submit,
        setSubmit,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
