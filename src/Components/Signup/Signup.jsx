import { useEffect, useRef, useState } from 'react';
import styles from './Signup.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContextValues } from '../../Context/UserContext';

function SignUp() {
  const selectRef = useRef(null);
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

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignUpSubmit(true);
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

  const handleSelectLabelClick = () => {
    if (selectRef.current) {
      selectRef.current.click();
    }
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
            <select
              id="mySelect"
              name="options"
              defaultValue={''}
              className={styles.selector_box}
              onChange={handleSelect}
              ref={selectRef}
              required
            >
              <option value=""></option>
              <option value="Customer">Customer</option>
              <option value="Seller">Seller</option>
            </select>
            <label htmlFor="mySelect" onClick={handleSelectLabelClick}>
              Enter Password
            </label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" disabled={verifyingUser ? true : false}>
            {verifyingUser ? <span className={styles.loader}></span> : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
