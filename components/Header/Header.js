import styles from "./Header.module.css";
import Link from "next/link";
export default function Header({ children }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="devatopia_logo_black.svg" />
        </div>
        <nav>
          <img src="Forme_NavBar.svg" className={styles.backgroundNav} />
          <ul>
            <li><Link href="/">{"Équipe"}</Link></li>
            <li><Link href="/techno">{"Technologies"}</Link></li>
            <li><Link href="/service">{"Services"}</Link></li>
            <li><Link href="/tarif">{"Tarifs"}</Link></li>
            <li><Link href="/contact">{"Contact"}</Link></li>
            
          </ul>
        </nav>
      </div>
    </>
  );
}
