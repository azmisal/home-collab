"use client"
// ... (other imports)

import Link from 'next/link';
import { auth } from '@/app/firebase/config';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import styles from '@/styles/signup.module.css';
import { useRouter } from 'next/router'; 

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
 
  const isTokenValid = (token) => {
    return token && new Date(token.expiresAt) > new Date();
  };

  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      const storedToken = JSON.parse(localStorage.getItem('userToken'));
      if (isTokenValid(storedToken)) {
        window.location = '/';
        return;
      }
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res.user.uid);
      localStorage.setItem('userId', JSON.stringify(res.user.uid));
      if (res.user) {
        const newToken = {
          token: 'your_generated_token',
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), 
        };
        localStorage.setItem('userToken', JSON.stringify(newToken));
        router.push('/');
      }
    } catch (error) {
      console.error(error);
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          alert('Invalid email or password.');
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

  useEffect(() => {
    handleSignin();
  }, []);

  return (
    <div className={styles.main} id='signin'>
      <h1>Login</h1>
      <form className={styles.loginform} onSubmit={(event)=>handleSignin(event)}>
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
          Login
        </button>
      </form>
      <p className={styles.loginquery}>
        Don't have an account? <span
         className={styles.loglink}><Link href="/signup" passHref>Signup</Link></span>
      </p>
    </div>
  );
};

export default Signin;
