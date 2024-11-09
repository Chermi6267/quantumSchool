import { useClickOutside } from "@/hook/useClickOutside";
import styles from "./styles.module.scss";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  icon: string;
  text: string;
  description: string;
  id: string;
}

function CourseBtn(props: Props) {
  const { icon, text, id } = props;
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/course/${id}`);
      }}
      className={styles.course_btn}
    >
      <div
        className={styles.course_btn__image}
        style={
          {
            backgroundImage: `url(${icon})`,
            "--text": `"${text}"`,
          } as React.CSSProperties
        }
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.course_btn__svg}
        viewBox="0 0 25 25"
      >
        <path
          style={{ fill: "#f4a874" }}
          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
          data-name="Right"
        />
      </svg>
    </div>
  );
}

export default CourseBtn;
