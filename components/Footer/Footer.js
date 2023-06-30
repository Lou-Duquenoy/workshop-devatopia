import styles from "./Footer.module.css";
import { SiTwitter } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
export default function Footer({ children }) {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img className={styles.logo} src="devatopia_logo_white.svg" />
          <div>
            <div className={styles.row}>
              <p>Adresse: </p>
              <a>Av.Alan Turing, 59410 Anzin</a>
            </div>
            <div className={styles.row}>
              <p>Téléphone: </p>
              <a>+33 6 87 36 22 16</a>
            </div>
            <div className={styles.row}>
              <p>Email: </p>
              <a>contact@devatopiai.fr</a>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <h2>Liens importants:</h2>
          <div className={styles.importantLinks}>
            <div>
              <p>Equipe</p>
              <p>Technologies</p>
              <p>Services</p>
            </div>
            <div>
              <p>Partenaires</p>
              <p>Tarifs</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <h2>Où nous suivre ?</h2>
          <div className={styles.socialMediaContainer}>
            <div className={styles.socialMedia}>
              <SiInstagram />
            </div>
            <div className={styles.socialMedia}>
              <SiLinkedin />
            </div>
            <div className={styles.socialMedia}>
              <SiTwitter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
