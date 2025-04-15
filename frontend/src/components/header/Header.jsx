import styles from "./styles.module.css";
import logoIcon from "../../assets/icons/logo.svg";
import helpIcon from "../../assets/icons/header/help.svg";
import alertIcon from "../../assets/icons/header/alert.svg";

export default function Header() {
  return (
    <div className={styles["header"]}>
      <div className={styles["header__container"]}>
        <a href="#!" className={styles["header__logo"]}>
          <img src={logoIcon} alt="ДТС" className={styles["header__logo-icon"]} />
          <p className={styles["header__logo-text"]}>
            Личный кабинет потребителя
          </p>
        </a>
        <div className={styles["header__actions"]}>
          <button className={styles["header__actions-button"]}>
            <img src={helpIcon} alt="Помощь" className={styles["header__action-icon"]} />
          </button>
          <button className={styles["header__actions-button"]}>
            <img src={alertIcon} alt="Оповещения" className={styles["header__action-icon"]} />
          </button>
        </div>
      </div>
    </div>
  )
}
