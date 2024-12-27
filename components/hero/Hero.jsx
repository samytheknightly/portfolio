import styles from "./hero.module.scss";
import PaddedContainer from "../padded-container/PaddedContainer";
import CTA from "../cta/CTA";

const Hero = () => {
  return (
    <PaddedContainer containerClassName={styles.container}
      className={styles.content}>
      <div>
        <h2>Servus, mein Name ist Samy</h2>
        <p>Ich bin Webdesigner aus München. <br /> Mein primäres Ziel beim Designen einer Website ist das Gewinnen des Vertrauens der Besucher für meine Kunden. Lass uns einen Termin vereinbaren, damit wir an Deiner Vision arbeiten können.</p>
        <CTA />
      </div>
      <div></div>
    </PaddedContainer>
  );
};

export default Hero;
