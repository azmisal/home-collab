"use client"
// ... (other imports)

import Link from 'next/link';
import { auth } from '@/app/firebase/config';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import styles from '@/styles/signup.module.css';
import { useRouter } from 'next/router'; // Correct import

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  // const router = useRouter();

  // Function to check if the token is still valid
  const isTokenValid = (token) => {
    return token && new Date(token.expiresAt) > new Date();
  };

  // Function to perform sign-in
  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      // Check if a valid token is already stored
      const storedToken = JSON.parse(localStorage.getItem('userToken'));
      if (isTokenValid(storedToken)) {
        // If a valid token is present, navigate to the home page
        window.location = '/';
        return;
      }

      // If no valid token, proceed with regular sign-in logic
      const res = await signInWithEmailAndPassword(email, password);

      // If the login is successful, generate and store a new token
      if (res.user) {
        const newToken = {
          token: 'your_generated_token',
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Expires in 30 days
        };

        // Store the new token in localStorage
        localStorage.setItem('userToken', JSON.stringify(newToken));

        // Navigate to the home page
        router.push('/');
      }
    } catch (error) {
      console.error(error);
      // Handle different error cases
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

  // useEffect to check and refresh the token on component mount
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
        Don't have an account? <Link href="/signup" passHref><p
         className={styles.loglink}>Signup</p></Link>
      </p>
    </div>
  );
};

export default Signin;
