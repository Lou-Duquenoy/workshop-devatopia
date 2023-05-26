import { Inter } from "next/font/google";
import styles from "./Service.module.css";

import React, { useCallback, useEffect, useState, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Service() {
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
      <div className={styles.container}>
        <div className={styles.BigRow}>
          <div className={styles.row}>
            
          </div>
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
                    src="tablette.svg"
                    alt="Image 2"
                  />
                </div>
              </div>

              <div>
                <div className={styles.BoxProject}>
                  <img
                    className={styles.phone}
                    src="Mobile_One.svg"
                    alt="Image 2"
                  />
                </div>
              </div>
              <div className={styles.BoxProject}>
                <div>
                  <img
                    className={styles.phone}
                    src="Mobile_Two.svg"
                    alt="Image 2"
                  />
                </div>
              </div>
              <div className={styles.BoxProject}>
                <div>
                  <img
                    className={styles.phone}
                    src="Mobile_Three.svg"
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
      </div>
    </>
  );
}
