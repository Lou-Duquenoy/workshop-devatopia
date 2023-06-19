import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import React, { useCallback, useEffect, useState, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const carouselRef = useRef(null);
  const carouselTestRef = useRef(null);

  const handlePrevious = () => {
    const container = carouselRef.current;
    const scrollAmount = container.offsetWidth;

    if (container.scrollLeft <= scrollAmount) {
      // On the first two divs, show the last divs
      container.scrollLeft = container.scrollWidth - container.offsetWidth;
    } else {
      container.scrollLeft -= scrollAmount;
    }
  };

  const handleNext = () => {
    const container = carouselRef.current;
    const scrollAmount = container.offsetWidth;

    if (
      container.scrollLeft + container.offsetWidth >=
      container.scrollWidth - scrollAmount
    ) {
      // On the last two divs, show the first div
      container.scrollLeft = 0;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const handlePreviousTest = () => {
    const container = carouselTestRef.current;
    const scrollAmount = container.offsetWidth;

    if (container.scrollLeft <= scrollAmount) {
      // On the first two divs, show the last divs
      container.scrollLeft = container.scrollWidth - container.offsetWidth;
    } else {
      container.scrollLeft -= scrollAmount;
    }
  };

  const handleNextTest = () => {
    const container = carouselTestRef.current;
    const scrollAmount = container.offsetWidth;

    if (
      container.scrollLeft + container.offsetWidth >=
      container.scrollWidth - scrollAmount
    ) {
      // On the last two divs, show the first div
      container.scrollLeft = 0;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.containerHero}>
          <h1>Welcome to Your Landing Page</h1>
          <p>This is the introductory section of your landing page.</p>
          <a href="#container" className={styles.btn}>
            Get Started
          </a>
        </div>
      </section>
      <div id="container" className={styles.container}>
        <div className={styles.row}>
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
                de votre application mobile ou Web. Nous vous aidons à donner
                vie à vos idées ! Réalisons ensemble votre projet correspondant
                le mieux à vos besoins. Un projet sur mesure !
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
                  Alexandre est notre concepteur UI/UX mais également
                  développeur Mobile, Web et API.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowText}>
            <h2>Une équipe dédiée à votre projet</h2>

            <p>
              Nous vous accompagnons dans la création, refonte ou amélioration
              de votre application mobile ou Web. Nous vous aidons à donner vie
              à vos idées ! Réalisons ensemble votre projet correspondant le
              mieux à vos besoins. Un projet sur mesure !
            </p>
          </div>
          <div className={styles.rowImage}>
            <img src="desk.svg" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.columny1}>
            <img src="DMobile_Icon.svg" alt="" />
          </div>
          <div >
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
                Déploiement de l'application sur l'Apple store et le Play Store
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
        <div className={styles["row"] + " " + styles["rowService"]}>
          <h2>
            Avez vous besoin d'un accompagnement complet sur-mesure ? Voici nos
            compétences :
          </h2>
          <div className={styles.carouselContainer}>
            <div
              className={styles["round"] + " " + styles["roundLeft"]}
              onClick={handlePrevious}
            >
              <div className={styles.carouselButton}></div>
            </div>
            <div className={styles.carouselContent} ref={carouselRef}>
              <div>
                <div className={styles.BoxTop}>
                  <img src="DMobile_Icon.svg" alt="Image 2" />
                </div>
                <div className={styles["Box"] + " " + styles["BoxBlue"]}>
                  <h2>Développement mobile</h2>
                  <p>
                    Nous pouvons effectuer le développement de votre application
                    mobile
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.BoxTop}>
                  <img src="DMobile_Icon.svg" alt="Image 2" />
                </div>
                <div className={styles["Box"] + " " + styles["BoxGreen"]}>
                  <h2>Audit mobile</h2>
                  <p>
                    Nous pouvons effectuer un audit de votre application mobile
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.BoxTop}>
                  <img src="DMobile_Icon.svg" alt="Image 2" />
                </div>
                <div className={styles["Box"] + " " + styles["BoxPink"]}>
                  <h2>UI/UX Design</h2>
                  <p>
                    Nous pouvons effectuer les maquettes de vos sites web ou de
                    vos applications mobiles{" "}
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.BoxTop}>
                  <img src="DMobile_Icon.svg" alt="Image 2" />
                </div>
                <div className={styles["Box"] + " " + styles["BoxBlue"]}>
                  <h2>Développement Back-end</h2>
                  <p>
                    Nous pouvons effectuer le développement de votre Back-end
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.BoxTop}>
                  <img src="DMobile_Icon.svg" alt="Image 2" />
                </div>
                <div className={styles["Box"] + " " + styles["BoxGreen"]}>
                  <h2>Méthodes de développement</h2>
                  <p>
                    Nous pouvons vous initier aux méthodes de base dans le
                    domaine de la programmation
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.BoxTop}>
                  <img src="DMobile_Icon.svg" alt="Image 2" />
                </div>
                <div className={styles["Box"] + " " + styles["BoxPink"]}>
                  <h2>Méthodes de gestion de projets</h2>
                  <p>
                    Nous pouvons vous initier aux méthodes de gestion de projet
                    (Agile, Cycle en V, ...)
                  </p>
                </div>
              </div>
            </div>

            <div
              className={styles["round"] + " " + styles["roundRight"]}
              onClick={handleNext}
            >
              <div className={styles.carouselButton}></div>
            </div>
          </div>

          <h2>Exemple de nos projets réalisés.</h2>
          <div className={styles.carouselContainer}>
            <div
              className={styles["round"] + " " + styles["roundLeft"]}
              onClick={handlePreviousTest}
            >
              <div className={styles.carouselButton}></div>
            </div>
            <div className={styles.carouselContent} ref={carouselTestRef}>
              <div className={styles.BoxProject}>
                <div>
                  <img
                    className={styles.tablette}
                    src="image 6.png"
                    alt="Image 2"
                  />
                </div>
              </div>

              <div>
                <div className={styles.BoxProject}>
                  <img
                    className={styles.phone}
                    src="Calendrier Android 1.png"
                    alt="Image 2"
                  />
                </div>
              </div>
              <div className={styles.BoxProject}>
                <div>
                  <img
                    className={styles.phone}
                    src="image 8.png"
                    alt="Image 2"
                  />
                </div>
              </div>
              <div className={styles.BoxProject}>
                <div>
                  <img
                    className={styles.phone}
                    src="image 7.png"
                    alt="Image 2"
                  />
                </div>
              </div>
            </div>

            <div
              className={styles["round"] + " " + styles["roundRight"]}
              onClick={handleNextTest}
            >
              <div className={styles.carouselButton}></div>
            </div>
          </div>
        </div>
        <div className={styles["row"] + " " + styles["rowContact"]}>
          <div className={styles.columny1}>
            <p>
              Besoin d'aide pour votre projet, d'un devis ? Contactez-nous !
            </p>
            <p>
              Pour nous appeler : du lundi au vendredi de 9h à 18h : +33 6 87 37
              22 16
            </p>
            <p>
              Pour nous contacter par mail, vous pouvez utiliser le formulaire
              disponible sur notre site
            </p>
          </div>

          <div className={styles.columny2}>
            <form>
              <div className={styles.rowForm}>
                <input placeholder="Votre nom" />

                <input placeholder="Votre prénom" />
              </div>
              <div className={styles.rowFormFull}>
                <input placeholder="Votre email" />
              </div>
              <div className={styles.rowForm}>
                <input placeholder="Votre nom" />
                <input placeholder="Votre nom" />
              </div>
              <div className={styles.rowFormFull}>
                <input placeholder="Votre nom" />
              </div>
              <div className={styles.rowFormFull}>
                <textarea placeholder="Votre message" />
              </div>

              <p className={styles.conditions}>
                J'ai lu la politique de confidentialité, j'y adhère sans réserve
                et je consens au traitement des données récoltées
              </p>
              <div className={styles.buttonContainer}>
                <button>Envoyer votre message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
