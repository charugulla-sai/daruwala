import { useState } from 'react';
import styles from './Signin.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/signin', {
        email: email,
        password: password,
      });
      if (response.status == 200) {
        navigate('/');
      } else {
        throw new Error('Login attempt failed.');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.signin_component}>
      <div className={styles.signin_section}>
        <h1 className={styles.signin_heading}>Welcome</h1>
        <p className={styles.signin_text}>Login for a seamless experience.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePassword}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
