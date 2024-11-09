import { RefObject } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface Props {
  ref?: RefObject<HTMLDivElement>;
}

function Footer(props: Props) {
  const { ref } = props;

  return (
    <footer className={styles.footer} ref={ref}>
      <p className={styles.footer__logo}>
        <Image
          src={"/logo.png"}
          width={70}
          height={70}
          alt={"Quantum School"}
        />
        © Directed by D4C in 2024. Все права защищены.
      </p>
      <div className={styles.footer__contacts}>
        <p>
          Разработка<br></br>+7-999-173-05-87
        </p>
        <p>
          Дизайн<br></br>+7-924-164-46-98
        </p>
        <p>
          Менеджмент<br></br>+7-924-768-40-35
        </p>
      </div>
    </footer>
  );
}

export default Footer;
