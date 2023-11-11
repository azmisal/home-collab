//@ts-nocheck
"use client"
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import Link from 'next/link';
import { Link as ReactScrollLink, animateScroll as scroll } from 'react-scroll';
import styles from '@/styles/Navbar.module.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
const Navbar = ({ show }) => {
  const [toggle, setToggle] = useState(false);
  const [user] = useAuthState(auth);

  const handleToggle = () => {
    setToggle(!toggle);
  };




  const handleApplianceClick = () => {
    setToggle(false);
  };

  return (
    <div className={`${styles.navbar} ${show ? styles.show : ''}`}>
      <h1 className={styles.navName} >
        ELECTROHOMIE
      </h1>
      <div className={`${styles.navlinks} ${toggle ? styles.showMenu : ''}`}>
        <ReactScrollLink to='home' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setToggle(false)}>
          <h1 className={styles.navlink}>Home</h1>
        </ReactScrollLink>
        {user ? (
          <Link href="/appliance" passHref>
            <p className={styles.navlink} onClick={handleApplianceClick}>
              Appliance
            </p>
          </Link>
          
        ) : (
          <button className={styles.navbut}>
            <Link href="/signin" passHref>
              <p onClick={handleApplianceClick}>
                SignIn
              </p>
            </Link>
          </button>
        )}
        <ReactScrollLink to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setToggle(false)}>
          <h1 className={styles.navlink}>About</h1>
        </ReactScrollLink>
        <ReactScrollLink to='details' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setToggle(false)}>
          <h1 className={styles.navlink}>Details</h1>
        </ReactScrollLink>
        <ReactScrollLink to='footer' spy={true} smooth={true} offset={-138} duration={500} onClick={() => setToggle(false)}>
          <h1 className={styles.navlink}>Contact</h1>
        </ReactScrollLink>
      </div>
      <div className={styles.tog} onClick={handleToggle}>
        {toggle ? <MdClose size={25} /> : <FiMenu size={25} />}
      </div>
    </div>
  );
};

export default Navbar;
