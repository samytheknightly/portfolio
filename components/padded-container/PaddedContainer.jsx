import styles from "./padded-container.module.scss";

const PaddedContainer = ({ containerClassName = "", className = "", children }) => {
  return (
    <div className={[styles.container, containerClassName].join(" ")}>
      <div className={[styles.content, className].join(" ")}>
        {children}
      </div>
    </div>
  );
};

export default PaddedContainer;
