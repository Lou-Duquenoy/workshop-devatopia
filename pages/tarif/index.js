import { Inter } from "next/font/google";
import { useForm } from "react-hook-form";
import styles from "./Tarif.module.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const inter = Inter({ subsets: ["latin"] });

export default function Tarif() {
  const { register, handleSubmit } = useForm();
  const [price, setPrice] = useState();

  const onSubmit = (data) => {
    let totalPrice = 0;

    const pricePerPlatform = {
      iOS: 1000,
      Android: 1000,
      both: 1800,
    };
    totalPrice += pricePerPlatform[data.platform];

    const pricePerDevice = {
      smartphones: 500,
      tablets: 500,
      both: 800,
    };
    totalPrice += pricePerDevice[data.device];

    const pricePerFormat = {
      portrait: 200,
      landscape: 200,
      both: 400,
    };
    totalPrice += pricePerFormat[data.format];

    const pricePerDesign = {
      no: 0,
      yes: 500,
    };
    totalPrice += pricePerDesign[data.design];

    const pricePerRegistration = {
      no: 0,
      email: 300,
      facebook: 300,
      google: 300,
      sms: 300,
    };
    totalPrice += pricePerRegistration[data.registration];

    const pricePerGeolocation = {
      no: 0,
      user: 200,
      static: 200,
      mobile: 200,
    };
    totalPrice += pricePerGeolocation[data.geolocation];

    const pricePerMedia = {
      no: 0,
      photos: 100,
      videos: 100,
    };
    totalPrice += pricePerMedia[data.media];

    const pricePerChat = {
      no: 0,
      text: 200,
      "text-media": 300,
      groups: 300,
    };
    totalPrice += pricePerChat[data.chat];

    const pricePerPayment = {
      no: 0,
      yes: 500,
    };
    totalPrice += pricePerPayment[data.payment];

    const pricePerIoT = {
      no: 0,
      yes: 300,
    };
    totalPrice += pricePerIoT[data.iot];

    const pricePerNotifications = {
      no: 0,
      push: 200,
      email: 200,
      sms: 200,
    };
    totalPrice += pricePerNotifications[data.notifications];

    const pricePerLists = {
      no: 0,
      unknown: 0,
      yes: 200,
    };
    totalPrice += pricePerLists[data.lists];

    const pricePerSearchFilters = {
      no: 0,
      yes: 200,
    };
    totalPrice += pricePerSearchFilters[data.searchFilters];

    const pricePerOffline = {
      no: 0,
      yes: 300,
    };
    totalPrice += pricePerOffline[data.offline];

    const pricePerAdvertising = {
      no: 0,
      advertising: 200,
      analytics: 200,
    };
    totalPrice += pricePerAdvertising[data.advertising];

    const pricePerServerApi = {
      no: 0,
      yes: 500,
    };
    totalPrice += pricePerServerApi[data.serverApi];

    const pricePerBackOffice = {
      no: 0,
      yes: 500,
    };
    totalPrice += pricePerBackOffice[data.backOffice];

    console.log("Coût estimé:", totalPrice);
    setPrice(totalPrice);

    const prices = {
      platform: pricePerPlatform[data.platform],
      device: pricePerDevice[data.device],
      format: pricePerFormat[data.format],
      design: pricePerDesign[data.design],
      registration: pricePerRegistration[data.registration],
      geolocation: pricePerGeolocation[data.geolocation],
      media: pricePerMedia[data.media],
      chat: pricePerChat[data.chat],
      payment: pricePerPayment[data.payment],
      iot: pricePerIoT[data.iot],
      notifications: pricePerNotifications[data.notifications],
      lists: pricePerLists[data.lists],
      searchFilters: pricePerSearchFilters[data.searchFilters],
      offline: pricePerOffline[data.offline],
      advertising: pricePerAdvertising[data.advertising],
      serverApi: pricePerServerApi[data.serverApi],
      backOffice: pricePerBackOffice[data.backOffice],
    };

    console.log("Prices:", JSON.stringify(prices));
  };

  return (
    <div className={styles.container}>
      {/* Form */}
      <div className={`${styles.column} ${styles.formColumn}`}>
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Estimation précise de votre application</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Platform */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="platform" className="form-label">
                  Pour quelle(s) plateforme(s) souhaitez-vous développer votre
                  application ?
                </label>
                <select
                  id="platform"
                  name="platform"
                  className={`form-select ${styles.select}`}
                  {...register("platform", { required: true })}
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="iOS">iOS</option>
                  <option value="Android">Android</option>
                  <option value="both">Les deux</option>
                </select>
              </div>

              {/* Device */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="device" className="form-label">
                  Sur quel(s) périphérique(s) souhaitez-vous développer votre
                  application ?
                </label>
                <select
                  id="device"
                  name="device"
                  className={`form-select ${styles.select}`}
                  {...register("device", { required: true })}
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="smartphones">Smartphones</option>
                  <option value="tablets">Tablettes</option>
                  <option value="both">Les deux</option>
                </select>
              </div>

              {/* Format */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="format" className="form-label">
                  Dans quel(s) format(s) souhaitez-vous que l'application
                  s'affiche ?
                </label>
                <select
                  id="format"
                  name="format"
                  className={`form-select ${styles.select}`}
                  {...register("format", { required: true })}
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="portrait">Portrait</option>
                  <option value="landscape">Paysage</option>
                  <option value="both">Les deux</option>
                </select>
              </div>

              {/* Design */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="design" className="form-label">
                  Souhaitez-vous être accompagné(e) pour le design de votre
                  application ?
                </label>
                <select
                  id="design"
                  name="design"
                  className={`form-select ${styles.select}`}
                  {...register("design", { required: true })}
                >
                  <option value="no">Non, je m'en occupe</option>
                  <option value="yes">Oui, vous vous occupez du design</option>
                </select>
              </div>

              {/* Registration System */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="registration" className="form-label">
                  Avez-vous besoin d'un système d'inscription à votre
                  application ?
                </label>
                <select
                  id="registration"
                  name="registration"
                  className={`form-select ${styles.select}`}
                  {...register("registration", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="email">Oui, par e-mail / mot de passe</option>
                  <option value="facebook">Oui, par Facebook / Twitter</option>
                  <option value="google">Oui, par Google</option>
                  <option value="sms">Oui, au travers d'un SMS</option>
                </select>
              </div>

              {/* Geolocation */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="geolocation" className="form-label">
                  Avez-vous besoin d'un système de géolocalisation dans votre
                  application ?
                </label>
                <select
                  id="geolocation"
                  name="geolocation"
                  className={`form-select ${styles.select}`}
                  {...register("geolocation", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="user">Géoloc de l'utilisateur</option>
                  <option value="static">
                    Géoloc de points statiques autres que l'utilisateur sur une
                    carte
                  </option>
                  <option value="mobile">
                    Géoloc de points mobiles autres que l'utilisateur sur une
                    carte
                  </option>
                </select>
              </div>

              {/* Media */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="media" className="form-label">
                  Souhaitez-vous avoir la possibilité d'envoyer des photos ou
                  des vidéos dans votre application ?
                </label>
                <select
                  id="media"
                  name="media"
                  className={`form-select ${styles.select}`}
                  {...register("media", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="photos">Envoi de photos</option>
                  <option value="videos">Envoi de vidéos</option>
                </select>
              </div>

              {/* Chat */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="chat" className="form-label">
                  Votre application devra-t-elle contenir un système de chat ?
                </label>
                <select
                  id="chat"
                  name="chat"
                  className={`form-select ${styles.select}`}
                  {...register("chat", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="text">Échange de textes uniquement</option>
                  <option value="text-media">
                    Échange de textes, photos et vidéos
                  </option>
                  <option value="groups">
                    Gestion de groupes de discussion
                  </option>
                </select>
              </div>

              {/* Payment */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="payment" className="form-label">
                  Votre application devra-t-elle contenir un système de paiement
                  ?
                </label>
                <select
                  id="payment"
                  name="payment"
                  className={`form-select ${styles.select}`}
                  {...register("payment", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="yes">Oui</option>
                </select>
              </div>

              {/* IoT */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="iot" className="form-label">
                  Souhaitez-vous un interfaçage de votre application avec des
                  objets connectés ?
                </label>
                <select
                  id="iot"
                  name="iot"
                  className={`form-select ${styles.select}`}
                  {...register("iot", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="yes">Oui</option>
                </select>
              </div>

              {/* Notifications */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="notifications" className="form-label">
                  Votre application devra-t-elle gérer des notifications ?
                </label>
                <select
                  id="notifications"
                  name="notifications"
                  className={`form-select ${styles.select}`}
                  {...register("notifications", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="push">Notifications push</option>
                  <option value="email">Notifications e-mail</option>
                  <option value="sms">Notifications SMS</option>
                </select>
              </div>

              {/* Lists */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="lists" className="form-label">
                  Envisagez-vous de gérer des listes dans votre application ?
                </label>
                <select
                  id="lists"
                  name="lists"
                  className={`form-select ${styles.select}`}
                  {...register("lists", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="unknown">Je ne sais pas</option>
                  <option value="yes">Oui</option>
                </select>
              </div>

              {/* Search and Filters */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="searchFilters" className="form-label">
                  Envisagez-vous d'ajouter une fonctionnalité de recherche par
                  mot clé et / ou des filtres par catégorie dans votre
                  application pour affiner les données affichées à l'utilisateur
                  ?
                </label>
                <select
                  id="searchFilters"
                  name="searchFilters"
                  className={`form-select ${styles.select}`}
                  {...register("searchFilters", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="yes">Oui</option>
                </select>
              </div>

              {/* Offline */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="offline" className="form-label">
                  Votre application devra-t-elle fonctionner hors ligne ?
                </label>
                <select
                  id="offline"
                  name="offline"
                  className={`form-select ${styles.select}`}
                  {...register("offline", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="yes">Oui</option>
                </select>
              </div>

              {/* Advertising / Analytics */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="advertising" className="form-label">
                  Souhaitez-vous intégrer un SDK de publicité / analytics dans
                  votre application ?
                </label>
                <select
                  id="advertising"
                  name="advertising"
                  className={`form-select ${styles.select}`}
                  {...register("advertising", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="advertising">SDK de publicité</option>
                  <option value="analytics">SDK d'analytics</option>
                </select>
              </div>

              {/* Server API */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="serverApi" className="form-label">
                  Souhaitez-vous interfacer votre application avec un serveur
                  distant (via un API) ?
                </label>
                <select
                  id="serverApi"
                  name="serverApi"
                  className={`form-select ${styles.select}`}
                  {...register("serverApi", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="yes">Oui</option>
                </select>
              </div>

              {/* Back-office */}
              <div className={`mb-4 ${styles.formField}`}>
                <label htmlFor="backOffice" className="form-label">
                  Souhaitez-vous un back-office pour administrer votre
                  application ?
                </label>
                <select
                  id="backOffice"
                  name="backOffice"
                  className={`form-select ${styles.select}`}
                  {...register("backOffice", { required: true })}
                >
                  <option value="no">Non</option>
                  <option value="yes">Oui</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`btn btn-primary btn-lg btn-block ${styles.submitButton}`}
              >
                Make purchase
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className={`${styles.column} ${styles.summaryColumn}`}>
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total estimé</strong>
                </div>
                <span>
                  <strong>{price}</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
