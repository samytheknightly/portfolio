import { useState } from "react";
import styles from "./hamburger.module.scss";

const Hamburger = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const openMenu = () => setMenuOpened(true);

  const closeMenu = () => setMenuOpened(false);

  return (
    <button className={styles.hamburger} onClick={menuOpened ? closeMenu : openMenu}>
      <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" /></svg>
      <div onClick={e => e.stopPropagation()} className={styles.menu} style={{ right: menuOpened ? 0 : "-100%" }}>
        Hi
      </div>
    </button>
  );
};

export default Hamburger;
