import styles from "./styles.module.css";
import logoIcon from "../../../../assets/icons/logo.svg";

export default function FooterLogo() {
  return (
    <div className={styles["logo"]}>
      <img src={logoIcon} alt="ДТС" className={styles["logo__icon"]} />
      <p className={styles["logo__text"]}>
        ©ООО “ДТС”, 2025
      </p>
    </div>
  )
}
