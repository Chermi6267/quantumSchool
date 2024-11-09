import { RefObject } from "react";
import styles from "./styles.module.scss";

interface Props {
  ref: RefObject<HTMLDivElement>;
}

function FirstCell(props: Props) {
  const { ref } = props;

  return (
    <div className={styles.first_cell}>
      <h1 className={styles.first_cell__title}>КВАНТОРИУМ</h1>
      <h2 className={styles.first_cell__paragraph}>Инновационные технологии</h2>
      <h2 className={styles.first_cell__paragraph}>
        Высокотехнологические площадки
      </h2>
      <div className={styles.first_cell__robot_cont}>
        <button
          className={styles.robot_cont__btn}
          onClick={() => {
            if (ref && ref.current) {
              ref.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Курсы
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.btn__svg}
            viewBox="0 0 25 25"
          >
            <path
              style={{ fill: "#f4a874" }}
              d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
              data-name="Right"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FirstCell;
