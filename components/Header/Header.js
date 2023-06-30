import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Header({ children }) {
  const router = useRouter();

  const handleLinkClick = (href) => (event) => {
    event.preventDefault();
    router.push(href);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navMobile}>
          <div className={styles.logo}>
            <img src="devatopia_logo_black.svg" />
          </div>
          <img className={styles.burgerMenu} src="burger-menu.png" />
        </div>
        <nav>
          <img src="Forme_NavBar.svg" className={styles.backgroundNav} />
          <ul>
            <li>
              <a href="#row-1" onClick={handleLinkClick("#row-1")}>
                Équipe
              </a>
            </li>
            <li>
              <a href="#row-2" onClick={handleLinkClick("#row-2")}>
                Technologies
              </a>
            </li>
            <li>
              <a href="/partners" onClick={handleLinkClick("/partners")}>
                Partenaires
              </a>
            </li>
            <li>
              <a href="#row-3" onClick={handleLinkClick("#row-3")}>
                Services
              </a>
            </li>
            <li>
              <a href="/tarif" onClick={handleLinkClick("/tarif")}>
                Tarifs
              </a>
            </li>
            <li>
              <a href="#row-5" onClick={handleLinkClick("#row-5")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
