import { createContext, useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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

  useEffect(() => {
    const signin = async () => {
      try {
        setError(false);
        const response = await axios.post(`http://localhost:3000/user/signin`, {
          email: email,
          password: password,
        });
        if (response.status !== 200) {
          throw new Error('Login attempt failed.');
        }
        setUserLoggedIn(true);
        localStorage.setItem('auth-token', response.data.access_token);
        localStorage.setItem('isUserLoggedIn', true);
        navigate('/');
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
    if (!userLoggedIn) {
      navigate('/signin');
    }
    // return()=>console.log('navigation cleared');
  }, [userLoggedIn]);


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
