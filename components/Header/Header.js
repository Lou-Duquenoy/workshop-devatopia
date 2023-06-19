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
            <li>
              <Link href="#row-1">{"Équipe"}</Link>
            </li>
            <li>
              <Link href="#row-2">{"Technologies"}</Link>
            </li>
            <li>
              <Link href="#row-3">{"Services"}</Link>
            </li>
            <li>
              <Link href="#row-4">{"Tarifs"}</Link>
            </li>
            <li>
              <Link href="#row-5">{"Contact"}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
