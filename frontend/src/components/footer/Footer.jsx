import FooterAddress from "./components/FooterAddress";
import FooterLogo from "./components/footerLogo";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__wrapper"]}>
        <FooterLogo />
        <FooterAddress />
      </div>
    </footer>
  )
}
