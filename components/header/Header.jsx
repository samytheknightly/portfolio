import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <Image alt="by Samy Sabi"
        className={styles.logo}
        src="/images/signature.png"
        width={500} height={500} />
    </div>
  );
};

export default Header;
