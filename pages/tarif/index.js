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
        <div className="card">
          <div className="card-header py-3">
            <h5 className="mb-0">Estimation précise de votre application</h5>
          </div>
          <div className="card-body">
            <form className={styles.formContainer}  onSubmit={handleSubmit(onSubmit)}>
              {/* Platform */}
              <div className={styles.formField}>
                <label className={styles.formLabel}>
                  Pour quelle(s) plateforme(s) souhaitez-vous développer votre
                  application ?
                </label>
                <img src="platform.svg"/>
                <div
                  className={`d-flex justify-content-center ${styles.radioContainer}`}
                >
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="platform-ios"
                      name="platform"
                      value="iOS"
                      className="form-check-input"
                      {...register("platform", { required: true })}
                    />
                    <label htmlFor="platform-ios" className="form-check-label">
                      iOS
                    </label>
                  </div>
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="platform-android"
                      name="platform"
                      value="Android"
                      className="form-check-input"
                      {...register("platform", { required: true })}
                    />
                    <label
                      htmlFor="platform-android"
                      className="form-check-label"
                    >
                      Android
                    </label>
                  </div>
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="platform-both"
                      name="platform"
                      value="both"
                      className="form-check-input"
                      {...register("platform", { required: true })}
                    />
                    <label htmlFor="platform-both" className="form-check-label">
                      Les deux
                    </label>
                  </div>
                </div>
              </div>

              {/* Device */}
              <div className={styles.formField}>
                <label className={styles.formLabel}>
                  Sur quel(s) périphérique(s) souhaitez-vous développer votre
                  application ?
                </label>
                <img src="peripheral.svg"/>
                <div
                  className={`d-flex justify-content-center ${styles.radioContainer}`}
                >
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="device-smartphones"
                      name="device"
                      value="smartphones"
                      className="form-check-input"
                      {...register("device", { required: true })}
                    />
                    <label
                      htmlFor="device-smartphones"
                      className="form-check-label"
                    >
                      Smartphones
                    </label>
                  </div>
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="device-tablets"
                      name="device"
                      value="tablets"
                      className="form-check-input"
                      {...register("device", { required: true })}
                    />
                    <label
                      htmlFor="device-tablets"
                      className="form-check-label"
                    >
                      Tablettes
                    </label>
                  </div>
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="device-both"
                      name="device"
                      value="both"
                      className="form-check-input"
                      {...register("device", { required: true })}
                    />
                    <label htmlFor="device-both" className="form-check-label">
                      Les deux
                    </label>
                  </div>
                </div>
              </div>

              {/* Format */}
              <div className={styles.formField}>
                <label className={styles.formLabel}>
                  Dans quel(s) format(s) souhaitez-vous que l'application
                  s'affiche ?
                </label>
                <img src="format.svg"/>
                <div
                  className={`d-flex justify-content-center ${styles.radioContainer}`}
                >
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="format-portrait"
                      name="format"
                      value="portrait"
                      className="form-check-input"
                      {...register("format", { required: true })}
                    />
                    <label
                      htmlFor="format-portrait"
                      className="form-check-label"
                    >
                      Portrait
                    </label>
                  </div>
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="format-landscape"
                      name="format"
                      value="landscape"
                      className="form-check-input"
                      {...register("format", { required: true })}
                    />
                    <label
                      htmlFor="format-landscape"
                      className="form-check-label"
                    >
                      Paysage
                    </label>
                  </div>
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="format-both"
                      name="format"
                      value="both"
                      className="form-check-input"
                      {...register("format", { required: true })}
                    />
                    <label htmlFor="format-both" className="form-check-label">
                      Les deux
                    </label>
                  </div>
                </div>
              </div>

              {/* Design */}
              <div className={styles.formField}>
                <label className={styles.formLabel}>
                  Souhaitez-vous être accompagné(e) pour le design de votre
                  application ?
                </label>
                <img src="design.svg"/>
                <div
                  className={`d-flex justify-content-center ${styles.radioContainer}`}
                >
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="design-no"
                      name="design"
                      value="no"
                      className="form-check-input"
                      {...register("design", { required: true })}
                    />
                    <label htmlFor="design-no" className="form-check-label">
                      Non, je m'en occupe
                    </label>
                  </div>
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="design-yes"
                      name="design"
                      value="yes"
                      className="form-check-input"
                      {...register("design", { required: true })}
                    />
                    <label htmlFor="design-yes" className="form-check-label">
                      Oui, vous vous occupez du design
                    </label>
                  </div>
                </div>
              </div>

              {/* Registration System */}
              <div className={styles.formField}>
                <label className={styles.formLabel}>
                  Avez-vous besoin d'un système d'inscription à votre
                  application ?
                </label>
                <img src="login.svg"/>
                <div
                  className={`d-flex justify-content-center ${styles.radioContainer}`}
                >
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="registration-no"
                      name="registration"
                      value="no"
                      className="form-check-input"
                      {...register("registration", { required: true })}
                    />
                    <label
                      htmlFor="registration-no"
                      className="form-check-label"
                    >
                      Non
                    </label>
                  </div>
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="registration-email"
                      name="registration"
                      value="email"
                      className="form-check-input"
                      {...register("registration", { required: true })}
                    />
                    <label
                      htmlFor="registration-email"
                      className="form-check-label"
                    >
                      Oui, par e-mail / mot de passe
                    </label>
                  </div>
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="registration-facebook"
                      name="registration"
                      value="facebook"
                      className="form-check-input"
                      {...register("registration", { required: true })}
                    />
                    <label
                      htmlFor="registration-facebook"
                      className="form-check-label"
                    >
                      Oui, par Facebook / Twitter
                    </label>
                  </div>
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="registration-google"
                      name="registration"
                      value="google"
                      className="form-check-input"
                      {...register("registration", { required: true })}
                    />
                    <label
                      htmlFor="registration-google"
                      className="form-check-label"
                    >
                      Oui, par Google
                    </label>
                  </div>
                  <div className={styles.formCheck}>
                    <input
                      type="radio"
                      id="registration-sms"
                      name="registration"
                      value="sms"
                      className="form-check-input"
                      {...register("registration", { required: true })}
                    />
                    <label
                      htmlFor="registration-sms"
                      className="form-check-label"
                    >
                      Oui, au travers d'un SMS
                    </label>
                  </div>
                </div>
              </div>

              {/* Geolocation */}
              <div className={styles.formField}>
                <label htmlFor="geolocation" className={styles.formLabel}>
                  Avez-vous besoin d'un système de géolocalisation dans votre
                  application ?
                </label>
                <img src="geolocalisation.svg"/>
                <div className={styles.radioGroup}>
                  <input
                    type="radio"
                    id="geolocation-no"
                    name="geolocation"
                    value="no"
                    {...register("geolocation", { required: true })}
                  />
                  <label htmlFor="geolocation-no">Non</label>

                  <input
                    type="radio"
                    id="geolocation-user"
                    name="geolocation"
                    value="user"
                    {...register("geolocation", { required: true })}
                  />
                  <label htmlFor="geolocation-user">
                    Géoloc de l'utilisateur
                  </label>

                  <input
                    type="radio"
                    id="geolocation-static"
                    name="geolocation"
                    value="static"
                    {...register("geolocation", { required: true })}
                  />
                  <label htmlFor="geolocation-static">
                    Géoloc de points statiques autres que l'utilisateur sur une
                    carte
                  </label>

                  <input
                    type="radio"
                    id="geolocation-mobile"
                    name="geolocation"
                    value="mobile"
                    {...register("geolocation", { required: true })}
                  />
                  <label htmlFor="geolocation-mobile">
                    Géoloc de points mobiles autres que l'utilisateur sur une
                    carte
                  </label>
                </div>
              </div>

              {/* Media */}
              <div className={styles.formField}>
                <label htmlFor="media" className={styles.formLabel}>
                  Souhaitez-vous avoir la possibilité d'envoyer des photos ou
                  des vidéos dans votre application ?
                </label>
                <img src="file_sharing.svg"/>
                <div className={styles.radioGroup}>
                  <input
                    type="radio"
                    id="media-no"
                    name="media"
                    value="no"
                    {...register("media", { required: true })}
                  />
                  <label htmlFor="media-no">Non</label>

                  <input
                    type="radio"
                    id="media-photos"
                    name="media"
                    value="photos"
                    {...register("media", { required: true })}
                  />
                  <label htmlFor="media-photos">Envoi de photos</label>

                  <input
                    type="radio"
                    id="media-videos"
                    name="media"
                    value="videos"
                    {...register("media", { required: true })}
                  />
                  <label htmlFor="media-videos">Envoi de vidéos</label>
                </div>
              </div>

              {/* Chat */}
              <div className={styles.formField}>
                <label htmlFor="chat" className={styles.formLabel}>
                  Votre application devra-t-elle contenir un système de chat ?
                </label>
                <img src="chat.svg"/>
                <div
                  className={`d-flex justify-content-center ${styles.radioContainer}`}
                >
                  <input
                    type="radio"
                    id="chat-no"
                    name="chat"
                    value="no"
                    {...register("chat", { required: true })}
                  />
                  <label htmlFor="chat-no">Non</label>

                  <input
                    type="radio"
                    id="chat-text"
                    name="chat"
                    value="text"
                    {...register("chat", { required: true })}
                  />
                  <label htmlFor="chat-text">
                    Échange de textes uniquement
                  </label>

                  <input
                    type="radio"
                    id="chat-text-media"
                    name="chat"
                    value="text-media"
                    {...register("chat", { required: true })}
                  />
                  <label htmlFor="chat-text-media">
                    Échange de textes, photos et vidéos
                  </label>

                  <input
                    type="radio"
                    id="chat-groups"
                    name="chat"
                    value="groups"
                    {...register("chat", { required: true })}
                  />
                  <label htmlFor="chat-groups">
                    Gestion de groupes de discussion
                  </label>
                </div>
              </div>

              {/* Payment */}
              <div className={styles.formField}>
                <label htmlFor="payment" className={styles.formLabel}>
                  Votre application devra-t-elle contenir un système de paiement
                  ?
                </label>
                <img src="payment.svg"/>
                <div
                  className={`d-flex justify-content-center ${styles.radioContainer}`}
                >
                  <input
                    type="radio"
                    id="payment-no"
                    name="payment"
                    value="no"
                    {...register("payment", { required: true })}
                  />
                  <label htmlFor="payment-no">Non</label>

                  <input
                    type="radio"
                    id="payment-yes"
                    name="payment"
                    value="yes"
                    {...register("payment", { required: true })}
                  />
                  <label htmlFor="payment-yes">Oui</label>
                </div>
              </div>

              {/* IoT */}
              <div className={styles.formField}>
                <label htmlFor="iot" className={styles.formLabel}>
                  Souhaitez-vous un interfaçage de votre application avec des
                  objets connectés ?
                </label>
                <img src="connected_devices.svg"/>
                <div className={styles.radioGroup}>
                  <input
                    type="radio"
                    id="iot-no"
                    name="iot"
                    value="no"
                    {...register("iot", { required: true })}
                  />
                  <label htmlFor="iot-no">Non</label>

                  <input
                    type="radio"
                    id="iot-yes"
                    name="iot"
                    value="yes"
                    {...register("iot", { required: true })}
                  />
                  <label htmlFor="iot-yes">Oui</label>
                </div>
              </div>

              {/* Notifications */}
              <div className={styles.formField}>
                <label htmlFor="notifications" className={styles.formLabel}>
                  Votre application devra-t-elle gérer des notifications ?
                </label>
                <img src="notifications.svg"/>
                <div className={styles.radioGroup}>
                  <input
                    type="radio"
                    id="notifications-no"
                    name="notifications"
                    value="no"
                    {...register("notifications", { required: true })}
                  />
                  <label htmlFor="notifications-no">Non</label>

                  <input
                    type="radio"
                    id="notifications-push"
                    name="notifications"
                    value="push"
                    {...register("notifications", { required: true })}
                  />
                  <label htmlFor="notifications-push">Notifications push</label>

                  <input
                    type="radio"
                    id="notifications-email"
                    name="notifications"
                    value="email"
                    {...register("notifications", { required: true })}
                  />
                  <label htmlFor="notifications-email">
                    Notifications e-mail
                  </label>

                  <input
                    type="radio"
                    id="notifications-sms"
                    name="notifications"
                    value="sms"
                    {...register("notifications", { required: true })}
                  />
                  <label htmlFor="notifications-sms">Notifications SMS</label>
                </div>
              </div>

              {/* Lists */}
              <div className={styles.formField}>
                <label htmlFor="lists" className={styles.formLabel}>
                  Envisagez-vous de gérer des listes dans votre application ?
                </label>
                <img src="to-do_list.svg"/>
                <div className={styles.radioGroup}>
                  <input
                    type="radio"
                    id="lists-no"
                    name="lists"
                    value="no"
                    {...register("lists", { required: true })}
                  />
                  <label htmlFor="lists-no">Non</label>

                  <input
                    type="radio"
                    id="lists-unknown"
                    name="lists"
                    value="unknown"
                    {...register("lists", { required: true })}
                  />
                  <label htmlFor="lists-unknown">Je ne sais pas</label>

                  <input
                    type="radio"
                    id="lists-yes"
                    name="lists"
                    value="yes"
                    {...register("lists", { required: true })}
                  />
                  <label htmlFor="lists-yes">Oui</label>
                </div>
              </div>

              {/* Search and Filters */}
              <div className={styles.formField}>
                <label htmlFor="searchFilters" className={styles.formLabel}>
                  Envisagez-vous d'ajouter une fonctionnalité de recherche par
                  mot clé et / ou des filtres par catégorie dans votre
                  application pour affiner les données affichées à l'utilisateur
                  ?
                </label>
                <img src="search.svg"/>
                <div className={styles.radioGroup}>
                  <input
                    type="radio"
                    id="searchFilters-no"
                    name="searchFilters"
                    value="no"
                    {...register("searchFilters", { required: true })}
                  />
                  <label htmlFor="searchFilters-no">Non</label>

                  <input
                    type="radio"
                    id="searchFilters-yes"
                    name="searchFilters"
                    value="yes"
                    {...register("searchFilters", { required: true })}
                  />
                  <label htmlFor="searchFilters-yes">Oui</label>
                </div>
              </div>

              {/* Offline */}
              <div className={styles.formField}>
                <label htmlFor="offline" className={styles.formLabel}>
                  Votre application devra-t-elle fonctionner hors ligne ?
                </label>
                <img src="offline.svg"/>
                <div
                  className={`d-flex justify-content-center ${styles.radioContainer}`}
                >
                  <input
                    type="radio"
                    id="offline-no"
                    name="offline"
                    value="no"
                    {...register("offline", { required: true })}
                  />
                  <label htmlFor="offline-no">Non</label>

                  <input
                    type="radio"
                    id="offline-yes"
                    name="offline"
                    value="yes"
                    {...register("offline", { required: true })}
                  />
                  <label htmlFor="offline-yes">Oui</label>
                </div>
              </div>

              {/* Advertising / Analytics */}
              <div className={styles.formField}>
                <label htmlFor="advertising" className={styles.formLabel}>
                  Souhaitez-vous intégrer un SDK de publicité / analytics dans
                  votre application ?
                </label>
                <img src="sdk.svg"/>
                <div
                  className={`d-flex justify-content-center ${styles.radioContainer}`}
                >
                  <input
                    type="radio"
                    id="advertising-no"
                    name="advertising"
                    value="no"
                    {...register("advertising", { required: true })}
                  />
                  <label htmlFor="advertising-no">Non</label>

                  <input
                    type="radio"
                    id="advertising-advertising"
                    name="advertising"
                    value="advertising"
                    {...register("advertising", { required: true })}
                  />
                  <label htmlFor="advertising-advertising">
                    SDK de publicité
                  </label>

                  <input
                    type="radio"
                    id="advertising-analytics"
                    name="advertising"
                    value="analytics"
                    {...register("advertising", { required: true })}
                  />
                  <label htmlFor="advertising-analytics">SDK d'analytics</label>
                </div>
              </div>

              {/* Server API */}
              <div className={styles.formField}>
                <label htmlFor="serverApi" className={styles.formLabel}>
                  Souhaitez-vous interfacer votre application avec un serveur
                  distant (via un API) ?
                </label>
                <img src="server.svg"/>
                <div
                  className={`d-flex justify-content-center ${styles.radioContainer}`}
                >
                  <input
                    type="radio"
                    id="serverApi-no"
                    name="serverApi"
                    value="no"
                    {...register("serverApi", { required: true })}
                  />
                  <label htmlFor="serverApi-no">Non</label>

                  <input
                    type="radio"
                    id="serverApi-yes"
                    name="serverApi"
                    value="yes"
                    {...register("serverApi", { required: true })}
                  />
                  <label htmlFor="serverApi-yes">Oui</label>
                </div>
              </div>

              {/* Back-office */}
              <div className={styles.formField}>
                <label htmlFor="backOffice" className={styles.formLabel}>
                  Souhaitez-vous un back-office pour administrer votre
                  application ?
                </label>
                <img src="backoffice.svg"/>
                <div
                  className={`d-flex justify-content-center ${styles.radioContainer}`}
                >
                  <input
                    type="radio"
                    id="backOffice-no"
                    name="backOffice"
                    value="no"
                    {...register("backOffice", { required: true })}
                  />
                  <label htmlFor="backOffice-no">Non</label>

                  <input
                    type="radio"
                    id="backOffice-yes"
                    name="backOffice"
                    value="yes"
                    {...register("backOffice", { required: true })}
                  />
                  <label htmlFor="backOffice-yes">Oui</label>
                </div>
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

      
      
    </div>
  );
}
