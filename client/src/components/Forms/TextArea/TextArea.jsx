import styles from "./TextArea.module.scss";

export default function TextArea({ value, disabled }) {
  return (
    <textarea
      disabled={disabled}
      className={styles.textarea}
      value={value}
    />
  );
}
