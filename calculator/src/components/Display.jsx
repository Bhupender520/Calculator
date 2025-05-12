import styles from "./Display.module.css";
const Display = ({ displaValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displaValue}
      readOnly
    />
  );
};
export default Display;
