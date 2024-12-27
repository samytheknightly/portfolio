import Link from "next/link";
import styles from "./cta.module.scss";

const CTA = () => {
  return (
    <Link className={styles.container} href="/kontakt">
      <span>Jetzt kontaktieren</span>
      <span className="right_arrow"></span>
    </Link>
  );
};

export default CTA;
