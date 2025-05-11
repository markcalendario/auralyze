import styles from "./ResultLoader.module.scss";

export default function ResultLoader() {
  return (
    <div className={styles.loader}>
      <img
        src="/assets/images/misc/diamond.png"
        alt="loader"
      />
      <p>Auralyzing</p>
    </div>
  );
}
