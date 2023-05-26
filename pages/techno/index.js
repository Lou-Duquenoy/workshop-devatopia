import { Inter } from "next/font/google";
import styles from "./Techno.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Techno() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.BigRow}>
          <div className={styles.row}>
            <div className={styles.columny1}>
              <img src="DMobile_Icon.svg" alt="" />
            </div>
            <div className={styles.columny2}>
              <h2>Un projet d'application mobile et/ ou web ?</h2>
              <p>
                Nous vous accompagnons dans toutes les étapes de votre projet.
              </p>
              <div className={styles.options}>
                <p>
                  <img className={styles.check} src="check.png" />
                  Conception d'un design moderne de votre application mobile et
                  web
                </p>
                <p>
                  <img className={styles.check} src="check.png" />
                  Développement de votre application mobile pour Android, IOS et
                  Web
                </p>
                <p>
                  <img className={styles.check} src="check.png" />
                  Application adaptée pour tout type d'appareil (ordinateur,
                  tablette, téléphone,...)
                </p>
                <p>
                  <img className={styles.check} src="check.png" />
                  Développement d'une base de données si besoin
                </p>
                <p>
                  <img className={styles.check} src="check.png" />
                  Déploiement de l'application sur l'Apple store et le Play
                  Store
                </p>
                <div className={styles.containerIconTech}>
                  <div className={styles.iconsTech}>
                    <img src="FlutterLogo.svg" />
                  </div>
                  <div className={styles.iconsTech}>
                    <img className={styles.firebase} src="FirebaseLogo.svg" />
                  </div>
                  <div className={styles.iconsTech}>
                    <img src="NodeLogo.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
