import { Link } from "react-router-dom";
import styles from "./Buttons.module.scss";

export function Button({ className, onClick, children }) {
  const classes = [styles.button, className].filter(Boolean).join(" ");

  return (
    <button
      className={classes}
      onClick={onClick}>
      {children}
    </button>
  );
}

export function LinkButton({ className, to, target, children }) {
  const classes = [styles.button, className].filter(Boolean).join(" ");

  return (
    <Link
      to={to}
      target={target}
      className={classes}>
      {children}
    </Link>
  );
}
