"use client"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useState } from 'react';
import styles from '@/styles/signup.module.css';
import 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword, createUserState] = useCreateUserWithEmailAndPassword(auth);

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password);

      const user = auth.currentUser;

      if (res) {
        window.location = '/signin';
      }
    } catch (error) {
      console.error(error);
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert('The email address is already in use.');
          break;
        case 'auth/weak-password':
          alert('The password is too weak.');
          break;
        case 'auth/network-request-failed':
          alert('You are not connected to the internet.');
          break;
        default:
          alert('Something went wrong.');
          break;
      }
    }
  };
  

  return (
    <div className={styles.main}>
      <h1>Signup</h1>
      <form className={styles.loginform} onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.emaill}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.emaill}
        />

        <button type="submit" className={styles.loginbut}>
          SignUp
        </button>
      </form>
      <p className={styles.loginquery}>
        Don't have an account? <span className={styles.loglink}>Login</span>
      </p>
    </div>
  );
};

export default Signup;
