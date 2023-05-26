import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.Box}>
            <img src="Maxime.svg" />
            <h2>Maxime Dehay</h2>
            <p>Associé gérant</p>
            <div className={styles.bottomText}>
              <p>
                Maxime est notre expert dans le développement Mobile, Web et
                API.
              </p>
            </div>
          </div>
          <div className={styles.BoxMiddle}>
            <h2>Développement d'un projet sur mesure</h2>
            <p>
              Nous vous accompagnons dans la création, refonte ou amélioration
              de votre application mobile ou Web. Nous vous aidons à donner vie
              à vos idées ! Réalisons ensemble votre projet correspondant le
              mieux à vos besoins. Un projet sur mesure !
            </p>
            <div>
              <a className={styles.cta}>
                Parlons de votre projet autour d'un café
              </a>
            </div>
          </div>
          <div className={styles.Box}>
            <img src="Alexandre.svg" />
            <h2>Alexandre Louis</h2>
            <p>Associé gérant</p>
            <div className={styles.bottomText}>
              <p>
                Alexandre est notre concepteur UI/UX mais également développeur
                Mobile, Web et API.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.BoxLeft}>
          <div className={styles.Row}>
            <div className={styles.rowText}>
              <h2>Une équipe dédiée à votre projet</h2>

              <p>
                Nous vous accompagnons dans la création, refonte ou amélioration
                de votre application mobile ou Web. Nous vous aidons à donner
                vie à vos idées ! Réalisons ensemble votre projet correspondant
                le mieux à vos besoins. Un projet sur mesure !
              </p>
            </div>
            <div>
              <img src="desk.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
