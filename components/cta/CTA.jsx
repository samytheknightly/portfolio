import Link from "next/link";
import styles from "./cta.module.scss";

const CTA = ({ className = "", children }) => {
  return (
    <Link className={[styles.container, className].join(" ")} href="/kontakt">
      <span>{children || "Jetzt kontaktieren"}</span>
      <span className="right_arrow"></span>
    </Link>
  );
};

export default CTA;
