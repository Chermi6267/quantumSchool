import { RefObject } from "react";
import styles from "./styles.module.scss";

interface Props {
  ref: RefObject<HTMLDivElement>;
}

function AboutUs(props: Props) {
  const { ref } = props;

  return (
    <div className={styles.second_cell} ref={ref}>
      <div className={styles["second_cell__about_us-paragraph"]}>
        <h1 className={styles.about_us__paragraph}> О нас</h1>
      </div>
      <div className={styles["second_cell__about_us-data"]}>
        <div className={styles["about_us-data__left_panel"]}>
          <div className={styles.left_panel__top}>
            <div className={styles.top__age_cont}>
              <h1>Более 7 лет</h1>
              <p>Развиваем дополнительное образование детей</p>
            </div>
            <div className={styles.top__children_cont} />
          </div>

          <div className={styles.left_panel__content}>
            <div className={styles.content__text_logo_cont}>
              <h1 className={styles.text_logo_cont__text}>
                Кванториум — место, где будущее становится настоящим
              </h1>
              <div className={styles.text_logo_cont__logo} />
            </div>
            <p>
              Здесь дети и подростки могут обучаться по различным направлениям:
              от робототехники до IT-технологий.
            </p>
          </div>
        </div>
        <div className={styles["about_us-data__right_panel"]}>
          <div className={styles.right_panel__data}>
            <h1>12</h1>
            <p>
              образовательных программ по направлениям деятельности было
              разработано
            </p>
          </div>
          <div className={styles.right_panel__data}>
            <h1>16</h1>
            <p>
              по повышению квалификации работников системы дополнительного
              образования
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
