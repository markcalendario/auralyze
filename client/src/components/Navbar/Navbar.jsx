import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const githubURL = "https://github.com/markcalendario/auralyze";

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.brand}>
              <img
                src="/assets/images/logo/auralyze.png"
                alt="auralyze logo"
              />
              <Link
                to="/"
                className={styles.name}>
                Auralyze
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <Link
              to={githubURL}
              target="_blank">
              <FaGithub className={styles.githubIcon} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
