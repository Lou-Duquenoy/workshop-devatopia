import styles from "./SendMailModal.module.css";
import { useState, useContext, useEffect, useRef } from "react";
import { DataContext } from "../../Context";

export default function SendMailModal() {
  const { sendMailModal, setSendMailModal, price } = useContext(DataContext);

  useEffect(() => {
    document.body.style.overflow = sendMailModal ? "hidden" : "scroll";
  }, [sendMailModal]);

  return (
    <>
      {sendMailModal === 1 ? (
        <>
          <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
              <p>Voici le montant total : {price} </p>
              <label>
                Veuillez fournir votre adresse e-mail pour pouvoir envoyer votre
                demande à notre équipe
              </label>
              <input placeholder="email"/>
              <button>Valider</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
