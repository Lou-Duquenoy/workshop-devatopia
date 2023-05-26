import { Inter } from "next/font/google";
import styles from "./Contact.module.css";

import React, { useCallback, useEffect, useState, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.BigRow}>
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
              
              <p className={styles.conditions}>J'ai lu la politique de confidentialité, j'y adhère sans réserve et je consens au traitement des données récoltées</p>
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
