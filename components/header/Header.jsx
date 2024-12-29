"use client";
import styles from "./header.module.scss";
import Link from "next/link";
import PaddedContainer from "../padded-container/PaddedContainer";
import CTA from "../cta/CTA";
import useScrollPos from "@/hooks/useScrollPos";
import { usePathname } from "next/navigation";
import useScreenType from "@/hooks/useScreenType";
import Hamburger from "../hamburger/Hamburger";

const Header = () => {
  const scrollPos = useScrollPos();
  const pathname = usePathname();
  const screenType = useScreenType();

  return (
    <PaddedContainer containerClassName={[styles.container,
    scrollPos === 0 && pathname === "/" ? styles.homeUnscrolled : ""].join(" ")}
      className={styles.content}>
      <Link className={styles.left} href="/">Samy Sabi <span>Webdesign</span></Link>

      {screenType === "desktop" ? <>
        <div className={styles.center}>
          <Link className={styles.centerLink} href="/dienstleistungen">Dienstleistungen</Link>
          <Link className={styles.centerLink} href="/preise">Preise</Link>
          <Link className={styles.centerLink} href="/referenzen">Referenzen</Link>
        </div>

        <div className={styles.right}>
          <CTA className={styles.cta} />
        </div>
      </> : <Hamburger />}
    </PaddedContainer >
  );
};

export default Header;
