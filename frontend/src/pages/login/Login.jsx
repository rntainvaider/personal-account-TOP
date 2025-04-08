import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./styles.module.css";

export default function Login() {
  return (
    <>
      <div className={styles["container"]}>
        <Header />
      </div>
      <Footer />
    </>
  );
};
