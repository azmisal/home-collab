import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import styles from '@/styles/Footer.module.css';
const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
      <div className={styles.f1}>
        <h1 className={styles.f1h1}>Join Now</h1>
        <div className={styles.f1p}>
          Take control and transform your home with our innovative smart home automation solutions.
        </div>
        <button className={styles.f1but1}>Get Started</button>
      </div>
      <div className={styles.f2}>
        <div className={styles.footicons}>
          <AiOutlineTwitter className={styles.ficon} />
          <AiFillInstagram className={styles.ficon} />
          <AiFillLinkedin className={styles.ficon} />
        </div>
        <p className={styles.f2p}>© 2023 Elevate Smart Home. All rights reserved.</p>
        <div className={styles.f2p2}>created by azmisal</div>
      </div>
    </div>
  )
}

export default Footer