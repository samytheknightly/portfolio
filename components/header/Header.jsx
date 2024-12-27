"use client";
import styles from "./header.module.scss";
import Link from "next/link";
import PaddedContainer from "../padded-container/PaddedContainer";
import CTA from "../cta/CTA";
import useScrollPos from "@/hooks/useScrollPos";

const Header = () => {
  const scrollPos = useScrollPos();

  return (
    <PaddedContainer containerClassName={[styles.container,
    scrollPos > 0 ? styles.scrolled : ""].join(" ")}
      className={styles.content}>
      <Link className={styles.left} href="/">Samy Sabi Webdesign</Link>

      <div className={styles.center}>
        <Link className={styles.centerLink} href="/dienstleistungen">Dienstleistungen</Link>
        <Link className={styles.centerLink} href="/preise">Preise</Link>
        <Link className={styles.centerLink} href="/referenzen">Referenzen</Link>
      </div>

      <div className={styles.right}>
        <CTA />
      </div>
    </PaddedContainer>
  );
};

export default Header;
