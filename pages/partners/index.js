import styles from "./Partners.module.css";
export default function Partners() {
  return (
    <div className={` ${styles["clearfix"]}`} id="sec-f71a">
      <div className={styles.sheet}>
        <div className={`${styles.layout} ${styles.row}`}>
          <div className={styles["size-60"]}>
            <div className={styles["container-style"]}>
              <div className={styles["container-layout"]}>
                <h2
                  className={`${styles.text} ${styles["custom-font"]} ${styles.oswald}`}
                >
                  Nos partenaires
                </h2>
                <p className={styles.text}>
                  Nous sommes fiers de collaborer avec un réseau diversifié
                  de partenaires de confiance qui partagent notre vision de
                  l'excellence et de l'innovation. Ensemble, nous formons une
                  communauté solide, travaillant main dans la main pour offrir
                  des solutions exceptionnelles à nos clients. Chacun de nos
                  partenaires est sélectionné avec soin pour sa réputation, son
                  expertise et sa capacité à fournir des produits et services de
                  qualité supérieure. Leurs connaissances spécialisées, leur
                  créativité et leur engagement envers l'excellence enrichissent
                  notre offre globale.
                </p>
                <a
                  href="#"
                  className={`${styles["border-2"]} ${styles["border-grey-dark-1"]} ${styles.btn} ${styles.rectangle} ${styles["button-style"]} ${styles["custom-font"]} ${styles.oswald}`}
                >
                  en savoir plus
                </a>
              </div>
            </div>
          </div>
          <div className={styles["size-60"]}>
            <div className={`${styles.layout} ${styles.row}`}>
              <div className={styles["size-30"]}>
                <div className={styles["container-style"]}>
                  <div className={styles["container-layout"]}>
                    <img
                      src="ibm.png"
                      alt=""
                      className={`${styles.image} ${styles["image-contain"]} ${styles["image-default"]}`}
                      data-image-width="130"
                      data-image-height="67"
                    />
                  </div>
                </div>
              </div>
              <div className={styles["size-30"]}>
                <div className={styles["container-style"]}>
                  <div className={styles["container-layout"]}>
                    <img
                      src="cisco.svg"
                      alt=""
                      className={`${styles.image} ${styles["image-contain"]} ${styles["image-default"]}`}
                    />
                  </div>
                </div>
              </div>
              <div className={styles["size-30"]}>
                <div className={styles["container-style"]}>
                  <div className={styles["container-layout"]}>
                    <img
                      src="google.svg"
                      alt=""
                      className={`${styles.image} ${styles["image-contain"]} ${styles["image-default"]}`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.layout} ${styles.row}`}>
              <div className={styles["size-30"]}>
                <div className={styles["container-style"]}>
                  <div className={styles["container-layout"]}>
                    <img
                      src="sony.svg"
                      alt=""
                      className={`${styles.image} ${styles["image-contain"]} ${styles["image-default"]}`}
                    />
                  </div>
                </div>
              </div>
              <div className={styles["size-30"]}>
                <div className={styles["container-style"]}>
                  <div className={styles["container-layout"]}>
                    <img
                      src="microsoft.svg"
                      alt=""
                      className={`${styles.image} ${styles["image-contain"]} ${styles["image-default"]}`}
                    />
                  </div>
                </div>
              </div>
              <div className={styles["size-30"]}>
                <div className={styles["container-style"]}>
                  <div className={styles["container-layout"]}>
                    <img
                      src="apple.png"
                      alt=""
                      className={`${styles.image} ${styles["image-contain"]} ${styles["image-default"]}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
