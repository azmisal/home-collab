import reg from "../assets/regulator.png";
import reg2 from "../assets/reg2.png";
import Image from "next/image";
import styles from "@/styles/Details.module.css"; // Assuming your styles module is named Details.module.css

const Details = () => {
  return (
    <div className={styles.details} id='details'> 
      <div className={styles.det1}>
        <div className={styles.dldiv}>
          <h1 className={styles.dlh1}>An All-in-One Home Command Center</h1>
          <p className={styles.dlp}>Our system integrates lighting, temperature, security, and more, providing unparalleled convenience and ease of use.</p>
        </div>
        <div className={styles.dl1imgdiv}>
          <Image src={reg} alt="" className={styles.dl1img} />
        </div>
      </div>

      <div className={styles.det2}>
        <div className={styles.dldiv2}>
          <h1 className={styles.dlh12}>Tailored to Your Unique Lifestyle</h1>
          <p className={styles.dlp2}>Customize settings to fit your preferences and daily routines, creating a space that adapts to your life.</p>
        </div>
        <div className={styles.dl1imgdiv}>
          <Image src={reg2} alt="" className={styles.dl1img} />
        </div>
      </div>
    </div>
  );
}

export default Details;
