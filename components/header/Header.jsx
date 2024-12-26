import styles from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.left} href="/">Samy Sabi Webdesign</Link>

      <div className={styles.center}>
        <Link className={styles.centerLink} href="/dienstleistungen">Dienstleistungen</Link>
        <Link className={styles.centerLink} href="/preise">Preise</Link>
        <Link className={styles.centerLink} href="/referenzen">Referenzen</Link>
      </div>

      <div className={styles.right}>
        <Link className={styles.cta} href="/kontakt">Kontakt aufnehmen</Link>
      </div>
    </div>
  );
};

export default Header;
