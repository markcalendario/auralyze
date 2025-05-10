import styles from "./Buttons.module.scss";

export default function Button({ className, onClick, children }) {
  const classes = [styles.button, className].filter(Boolean).join(" ");

  return (
    <button
      className={classes}
      onClick={onClick}>
      {children}
    </button>
  );
}
