import { useEffect, useState } from 'react';
import styles from './Signin.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContextValues } from '../../Context/UserContext';

function Signin() {
  const {
    error,
    setSignInSubmit,
    email,
    setEmail,
    password,
    setPassword,
    verifyingUser,
  } = useUserContextValues();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignInSubmit(true);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSignInSubmit(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSignInSubmit(false);
  };

  return (
    <div className={styles.signin_component}>
      <div className={styles.signin_section}>
        <h1 className={styles.signin_heading}>Welcome</h1>
        <p className={styles.signin_text}>Login for a seamless experience.</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className={styles.input_box}>
            <input
            className={styles.signin_input}
              type="email"
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
            className={styles.signin_input}
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePassword}
              required
            />
            <label htmlFor="password">Enter Password</label>
          </div>
          {error && (
            <p style={{ color: 'red' }}>{error}</p>
          )}
          <button className={styles.signin_button} type="submit" disabled={verifyingUser?true:false}>
            {verifyingUser? <span className={styles.loader}></span>: 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
