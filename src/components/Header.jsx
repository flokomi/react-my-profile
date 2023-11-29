import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.gradientBackground}>
        <div className={styles.heading}>
          <h1>Hello👏, I am Florian</h1>
          <span>
            <FontAwesomeIcon icon={faCode} className={styles.icon} />
            <h2>Programmer</h2>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
