"use client"
import {useState,useEffect} from 'react';
import Home from "./Home";
import About from "./About";
import Details from "./Details";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Signup from "./signup/page";
export default function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  // const [authenticated, setAuthenticated] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > window.innerHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      if (currentScrollPos > prevScrollPos) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  // const handleLoginSuccess = () => {
  //   // Handle successful login, you might check against a backend here
  //   setAuthenticated(true);
  // };
  return (
    <div className="App">
      <Navbar show={showNavbar}/>
      <Home />
      <About />
      <Details />
      <Footer />
    </div>

  )
}
