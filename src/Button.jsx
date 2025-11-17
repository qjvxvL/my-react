import styles from "./Button.module.scss";

function Button() {
  return (
    <button className={styles.button}>
      Click me
      {/* Use CSS module classes and spans (valid inside <button>) */}
      <span className={styles.button__horizontal}></span>
      <span className={styles.button__vertical}></span>
    </button>
  );
}

export default Button;
