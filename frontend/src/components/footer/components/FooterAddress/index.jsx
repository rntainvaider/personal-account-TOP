import styles from "./styles.module.css";

export default function FooterAddress() {
  return (
    <div className={styles["address"]}>
      <h3 className={styles["address__title"]}>
        Офис обслуживания
      </h3>
      <p className={styles["address__text"]}>
        г.Батайск, ул.Козлова, д. 32
      </p>
      <p className={styles["address__text"]}>
        Тел:
        <a href="tel:+78635224252" className={styles["address__phone"]}>
          +7(86352) 24 - 25 - 2
        </a>
      </p>
      <p className={styles["address__text"]}>
        Пн - Пт: 17:00 - 22:00
      </p>
      <p className={styles["address__text"]}>
        Сб - Вс: выходной
      </p>
      <p className={styles["address__text"]}>
        <a href="mailto:mail@mail.ru" className={styles["address__mail"]}>
          mail@mail.ru
        </a>
      </p>
    </div>
  )
}
