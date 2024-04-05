import { useEffect, useState } from 'react';
import styles from './Signin.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContextValues } from '../../Context/UserContext';

function Signin() {
  const { error, setSubmit, email, setEmail, password, setPassword } =
    useUserContextValues();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmit(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmit(false);
  };

  return (
    <div className={styles.signin_component}>
      <div className={styles.signin_section}>
        <h1 className={styles.signin_heading}>Welcome</h1>
        <p className={styles.signin_text}>Login for a seamless experience.</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className={styles.input_box}>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleEmail}
              required
            />
            <label htmlFor="email">Enter Email</label>
          </div>
          <div className={styles.input_box}>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePassword}
              required
            />
            <label htmlFor="password">Enter Password</label>
          </div>
          {error && <p>Email or password incorrect.</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
