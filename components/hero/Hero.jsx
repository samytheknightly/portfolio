import styles from "./hero.module.scss";
import Image from "next/image";
import PaddedContainer from "../padded-container/PaddedContainer";
import CTA from "../cta/CTA";

const Hero = () => {
  return (
    <PaddedContainer containerClassName={styles.container}
      className={styles.content}>
      <div className={styles.copy}>
        <h1 className={styles.heading}>Dein Online-Auftritt in besten Händen</h1>

        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Als leidenschaftlicher Webdesigner bringe ich kreative Ideen und technische Fähigkeiten zusammen, um Websites zu gestalten, die überzeugen und begeistern.
          </p>

          <p className={[styles.paragraph, styles.finalParagraph].join(" ")}>
            Gemeinsam können wir Deine Vision umsetzen - lass uns einen Termin vereinbaren!
          </p>
        </div>

        <CTA className={styles.cta}>Termin vereinbaren</CTA>
      </div>

      <div className={styles.portraitWithBg}>
        <Image alt="Porträt von Samy"
          src={"/images/portrait.png"} width={500} height={500}
          className={styles.img} />
      </div>
    </PaddedContainer>
  );
};

export default Hero;
