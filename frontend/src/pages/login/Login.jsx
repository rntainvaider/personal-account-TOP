import Footer from "../../components/footer/Footer";
import FormAuth from "../../components/formAuth/FormAuth";
import Header from "../../components/header/Header";
import styles from "./styles.module.css";

export default function Login() {
  return (
    <>
      <div className={styles["container"]}>
        <Header />
        <div className={styles["content"]}>
          <FormAuth />
        </div>
        <Footer />
      </div>
    </>
  );
};
