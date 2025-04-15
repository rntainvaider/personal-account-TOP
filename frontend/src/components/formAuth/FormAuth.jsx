import styles from "./styles.module.css";

export default function FormAuth() {
  return (
    <div className={styles["auth"]}>
      <h2 className={styles["title"]}>
        Вход в личный кабинет
      </h2>
      <p className="text">
        Нет учётной записи?
        <a href="#!" className="registration">
          Зарегистрироваться
        </a>
      </p>
    </div>
  )
}
