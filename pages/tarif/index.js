import { Inter } from "next/font/google";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect, useRef } from "react";
import styles from "./Tarif.module.css";
import { DataContext } from "../../components/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const inter = Inter({ subsets: ["latin"] });

export default function Tarif({ children }) {
  const { sendMailModal, setSendMailModal, price, setPrice } =
    useContext(DataContext);
  const carouselRef = useRef(null);
  const { register, handleSubmit } = useForm();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setCurrentQuestionIndex(current),
  };
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
    const totalQuestions = container.children.length;

    // Calculate the index of the next question
    const nextQuestionIndex = (currentQuestionIndex + 1) % totalQuestions;

    // Scroll to the next question
    container.scrollLeft = container.scrollLeft + scrollAmount;

    // Update the current question index
    setCurrentQuestionIndex(nextQuestionIndex);
  };

  const onSubmit = (data) => {
    let totalPrice = 0;

    const priceLanguage = {
      anglais: 600,
      espagnol: 600,
      allemand: 600,
    };
    totalPrice += priceLanguage[data.languages];

    const pricePerPlatform = {
      iOS: 1000,
      Android: 1000,
      both: 1800,
    };
    totalPrice += pricePerPlatform[data.platform];

    const priceSecurity = {
      encryption: 600,
      strongAuthentification: 600,
      authorization: 600,
    };
    totalPrice += priceSecurity[data.securityRequirements];

    const priceSyncOffline = {
      yes: 800,
      no: 0,
    };

    totalPrice += priceSyncOffline[data.realTimeSyncn];

    const priceFeatures = {
      authentification: 425,
      profile: 850,
      chat: 1200,
      notification: 850,
      payment: 1700,
    };

    totalPrice += priceFeatures[data.features];

    const priceSocialMedia = {
      yes: 800,
      no: 0,
    };

    totalPrice += priceSocialMedia[data.socialMedia];

    const priceCompatibility = {
      yes: 600,
      no: 0,
    };

    totalPrice += priceCompatibility[data.compatibility];

    console.log("Coût estimé:", totalPrice);
    setPrice(totalPrice);

    const prices = {
      languages: priceLanguage[data.languages],
      platform: pricePerPlatform[data.platform],
      securityRequirements: priceSecurity[data.securityRequirements],
      realTimeSyncn: priceSyncOffline[data.realTimeSyncn],
      features: priceFeatures[data.features],
      socialMedia: priceSocialMedia[data.socialMedia],
      compatibility: priceCompatibility[data.compatibility],
    };

    console.log("Prices:", JSON.stringify(prices));
    setSendMailModal(1);
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
            <form
              className={styles.formContainer}
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* IoT */}
              <div className={styles.carouselContainer}>
                <div className={styles.carouselContent} ref={carouselRef}>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>
                      Dans quelles langues souhaitez-vous que votre application
                      soit disponible ?
                    </label>
                    <img src="language.svg" />
                    <div className={styles.checkboxContainer}>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="language1"
                          name="languages"
                          value="anglais"
                          className="form-check-input"
                          {...register("languages")}
                        />
                        <label htmlFor="language1" className="form-check-label">
                          Anglais
                        </label>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="language2"
                          name="languages"
                          value="espagnol"
                          className="form-check-input"
                          {...register("languages")}
                        />
                        <label htmlFor="language2" className="form-check-label">
                          Espagnol
                        </label>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="language3"
                          name="languages"
                          value="allemand"
                          className="form-check-input"
                          {...register("languages")}
                        />
                        <label htmlFor="language3" className="form-check-label">
                          Allemand
                        </label>
                      </div>
                      {/* Ajoutez plus de langues ici */}
                    </div>
                  </div>
                  {/* Format */}

                  <div className={styles.formField}>
                    <label className={styles.formLabel}>
                      Pour quelle(s) plateforme(s) souhaitez-vous développer
                      votre application ?
                    </label>
                    <img src="platform.svg" />
                    <div
                      className={`d-flex justify-content-center ${styles.radioContainer}`}
                    >
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="platform-ios"
                          name="platform"
                          value="iOS"
                          className="form-check-input"
                          {...register("platform", { required: true })}
                        />
                        <label
                          htmlFor="platform-ios"
                          className="form-check-label"
                        >
                          iOS
                        </label>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
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
                          type="checkbox"
                          id="platform-both"
                          name="platform"
                          value="both"
                          className="form-check-input"
                          {...register("platform", { required: true })}
                        />
                        <label
                          htmlFor="platform-both"
                          className="form-check-label"
                        >
                          Les deux
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Chat */}

                  <div className={styles.formField}>
                    <label className={styles.formLabel}>
                      Avez-vous des exigences spécifiques en matière de sécurité
                      pour votre application ?
                    </label>
                    <img src="security.svg" />
                    <div className={styles.checkboxContainer}>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="encryption-requirement"
                          name="securityRequirements"
                          value="encryption"
                          {...register("securityRequirements")}
                        />
                        <label htmlFor="encryption-requirement">
                          Chiffrement des données
                        </label>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="strong-authentication-requirement"
                          name="securityRequirements"
                          value="strongAuthentification"
                          {...register("securityRequirements")}
                        />
                        <label htmlFor="strong-authentication-requirement">
                          Authentification forte
                        </label>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="access-control-requirement"
                          name="securityRequirements"
                          value="authorization"
                          {...register("securityRequirements", { required: true })}
                        />
                        <label htmlFor="access-control-requirement">
                          Gestion des autorisations
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>
                      Votre application nécessitera-t-elle une synchronisation
                      des données en temps réel ou une fonctionnalité hors ligne
                      ?
                    </label>
                    <img src="offline.svg" />
                    <div className={styles.checkboxContainer}>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="real-time-sync"
                          name="realTimeSyncn"
                          value="yes"
                          className="form-check-input"
                          {...register("realTimeSyncn", { required: true })}
                        />
                        <label htmlFor="real-time-sync">
                          Synchronisation en temps réel
                        </label>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="offline-functionality"
                          name="realTimeSyncn"
                          value="no"
                          className="form-check-input"
                          {...register("realTimeSyncn", { required: true })}
                        />
                        <label htmlFor="offline-functionality">
                          Fonctionnalité hors ligne
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.formLabel}>
                      Quelles fonctionnalités principales souhaitez-vous inclure
                      dans votre application ?
                    </label>
                    <img src="features.svg" />
                    <div className={styles.checkboxContainer}>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="feature1"
                          name="features"
                          value="authentification"
                          className="form-check-input"
                          {...register("features", { required: true })}
                        />
                        <label htmlFor="feature1" className="form-check-label">
                          Authentification utilisateur
                        </label>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="feature2"
                          name="features"
                          value="user-profile"
                          className="form-check-input"
                          {...register("features", { required: true })}
                        />
                        <label htmlFor="feature2" className="form-check-label">
                          Gestion de profil utilisateur
                        </label>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="feature3"
                          name="features"
                          value="chat"
                          className="form-check-input"
                          {...register("features", { required: true })}
                        />
                        <label htmlFor="feature3" className="form-check-label">
                          Messagerie instantanée
                        </label>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="feature4"
                          name="features"
                          value="notification"
                          className="form-check-input"
                          {...register("features", { required: true })}
                        />
                        <label htmlFor="feature4" className="form-check-label">
                          Système de notifications
                        </label>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="feature5"
                          name="features"
                          value="payment"
                          className="form-check-input"
                          {...register("features", { required: true })}
                        />
                        <label htmlFor="feature5" className="form-check-label">
                          Système de paiement en ligne
                        </label>
                      </div>
                      {/* Ajoutez plus de fonctionnalités ici */}
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>
                      Prévoyez-vous d'intégrer des fonctionnalités de réseaux
                      sociaux dans votre application ?
                    </label>
                    <img src="social-media.svg" />
                    <div className={styles.checkboxContainer}>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="social-media-features-yes"
                          name="socialMedia"
                          value="yes"
                          className="form-check-input"
                          {...register("socialMedia", { required: true })}
                        />
                        <label
                          htmlFor="social-media-features-yes"
                          className="form-check-label"
                        >
                          Oui
                        </label>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="social-media-features-no"
                          name="socialMedia"
                          value="no"
                          className="form-check-input"
                          {...register("socialMedia", { required: true })}
                        />
                        <label
                          htmlFor="social-media-features-no"
                          className="form-check-label"
                        >
                          Non
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.formLabel}>
                      Avez-vous des exigences en matière de compatibilité avec
                      différents appareils ou versions de système d'exploitation
                      mobile ?
                    </label>
                    <img src="compatibility.svg" />
                    <div className={styles.checkboxContainer}>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="compatibility-requirements-yes"
                          name="compatibility"
                          value="yes"
                          className="form-check-input"
                          {...register("compatibility", { required: true })}
                        />
                        <label
                          htmlFor="compatibility-requirements-yes"
                          className="form-check-label"
                        >
                          Oui
                        </label>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="checkbox"
                          id="compatibility-requirements-no"
                          name="compatibility"
                          value="no"
                          className="form-check-input"
                          {...register("compatibility", { required: true })}
                        />
                        <label
                          htmlFor="compatibility-requirements-no"
                          className="form-check-label"
                        >
                          Non
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Lists */}

                  {/* Search and Filters */}

                  {/* Submit Button */}
                </div>
              </div>
              <div className={styles.roundContainer}>
                <div
                  className={styles["round"] + " " + styles["roundLeft"]}
                  onClick={handlePrevious}
                >
                  <div className={styles.carouselButton}></div>
                </div>
                <div
                  className={styles["round"] + " " + styles["roundRight"]}
                  onClick={handleNext}
                >
                  <div className={styles.carouselButton}></div>
                </div>
              </div>
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
