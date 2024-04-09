import { useEffect, useState } from 'react';
import styles from './Signup.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContextValues } from '../../Context/UserContext';

function SignUp() {
  const {
    error,
    setSignUpSubmit,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    verifyingUser,
    setSelector,
  } = useUserContextValues();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignUpSubmit(true);
    console.log('hi');
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSignUpSubmit(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
    setSignUpSubmit(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSignUpSubmit(false);
  };
  const handleSelect = (e) => {
    setSelector(e.target.value);
    setSignUpSubmit(false);
  };

  return (
    <div className={styles.signup_component}>
      <div className={styles.signup_section}>
        <h1 className={styles.signup_heading}>Welcome</h1>
        <p className={styles.signup_text}>Register if you are a new user.</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className={styles.input_box}>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleName}
              required
            />
            <label htmlFor="name">Enter Name</label>
          </div>
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
          <div className={styles.selector_container}>
            <select className={styles.selector_box} onChange={handleSelect}>
              <option value="Customer">Customer</option>
              <option value="Seller">Seller</option>
            </select>
          </div>
          {error && (
            <p style={{ color: 'red' }}>Email or password incorrect.</p>
          )}
          <button type="submit" disabled={verifyingUser ? true : false}>
            {verifyingUser ? <span className={styles.loader}></span> : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;