import styles from "./hero.module.scss";
import PaddedContainer from "../padded-container/PaddedContainer";
import CTA from "../cta/CTA";

const Hero = () => {
  return (
    <PaddedContainer containerClassName={styles.container}
      className={styles.content}>
      <div className={styles.copy}>
        <h2 className={styles.heading}>Webdesigner aus München</h2>

        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Mit langjähriger Erfahrung in der Webentwicklung kombiniere ich kreative Gestaltung mit technischer Expertise, um benutzerfreundliche und funktionale Websites zu erstellen.
          </p>

          <p className={[styles.paragraph, styles.finalParagraph].join(" ")}>Lass uns einen Termin vereinbaren, damit wir an Deiner Vision arbeiten können.</p>
        </div>

        <CTA className={styles.cta}>Termin vereinbaren</CTA>
      </div>

      <div className={styles.right}>
        <span className={styles.img}>Image</span>
      </div>
    </PaddedContainer>
  );
};

export default Hero;
