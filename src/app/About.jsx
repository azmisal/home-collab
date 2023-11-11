import styles from '@/styles/About.module.css'; // Adjust the path based on your project structure
import aboutImage from '../assets/aboutimg.png';
import Image from "next/image";
import  Link  from 'next/link';
const About = () => {
  return (
    <div className={styles.about} id='about'>
      <div className={styles.abtcont}>
        <div className={styles.aboutLeft}>
          <div className={styles.aldiv}>
            <h1 className={styles.alh1}>REVELUTIONIZE</h1>
            <p className={styles.alp}>
              Enter the future of home automation with the most advanced smart home system. Simplify your life with seamless
              control over your household appliances and utilities.
            </p>
            <button className={styles.albut}>
              <Link href="/signup" passHref>
                GET STARTED
              </Link>
              </button>
            <Image src={aboutImage} alt="" className={styles.mobimg} />
          </div>
        </div>
        <div className={styles.aboutRight}>
          <div className={styles.arimgdiv}>
            <Image src={aboutImage} alt="" className={styles.arimg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
