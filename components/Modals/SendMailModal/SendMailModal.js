import styles from "./SendMailModal.module.css";
import { useState, useContext, useEffect, useRef } from "react";
import { DataContext } from "../../Context";
import axios from "axios";
export default function SendMailModal() {
  const { sendMailModal, setSendMailModal, price } = useContext(DataContext);
  const [email, setEmail] = useState("");

  const sendEmail = () => {
    axios
      .post(
        "http://localhost:3000/send-email",
        {
          email,
        },
        {
          //withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error sending email", error);
        // Handle error cases if necessary
      });
  };

  useEffect(() => {
    document.body.style.overflow = sendMailModal ? "hidden" : "scroll";
  }, [sendMailModal]);

  return (
    <>
      {sendMailModal === 1 ? (
        <>
          <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
              <h3>Envoyer votre demande par mail</h3>
              <p>Le montant total de votre demande est estimé à : {price}€ </p>
              
              <div className="form-group">
              <label>
                Veuillez donc fournir votre adresse e-mail pour pouvoir l'envoyer
                 à notre équipe :
              </label>
                <input  placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} className="form-control" />
              </div>
              <input type="submit" onClick={sendEmail} className="btn btn-success" id="submit" />
              
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
