"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import useAuth from "@/hook/useAuth";
import { useRouter } from "next/navigation";
import { logoutHandler } from "@/handlers/logoutHandler";
import { unsetUser } from "@/store/userSlice";
import { logOut } from "@/store/authSlice";
import { useDispatch } from "react-redux";
import { RefObject } from "react";

interface Props {
  ref1?: RefObject<HTMLDivElement>;
  ref2?: RefObject<HTMLDivElement>;
  ref3?: RefObject<HTMLDivElement>;
}

function HeaderComponent(props: Props) {
  const { ref1, ref2, ref3 } = props;
  const { isAuth, user } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <Image
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
        src={"/logo.png"}
        width={50}
        height={50}
        alt={"Quantum School"}
      />
      <ul className={styles.header__panel}>
        <li
          onClick={() => {
            if (ref1 && ref1.current) {
              ref1.current.scrollIntoView({ behavior: "smooth" });
            } else {
              router.push("/");
            }
          }}
          className={styles.panel__item}
        >
          Контакты
        </li>
        <li
          onClick={() => {
            if (ref2 && ref2.current) {
              ref2.current.scrollIntoView({ behavior: "smooth" });
            } else {
              router.push("/");
            }
          }}
          className={styles.panel__item}
        >
          О нас
        </li>
        <li
          onClick={() => {
            if (ref3 && ref3.current) {
              ref3.current.scrollIntoView({ behavior: "smooth" });
            } else {
              router.push("/");
            }
          }}
          className={styles.panel__item}
        >
          Курсы
        </li>
        <li
          onClick={() => {
            if (isAuth) {
              router.push("/profile");
            } else {
              router.push("/auth");
            }
          }}
          className={styles.panel__item}
        >
          {isAuth ? user.email : "Авторизуйтесь"}
        </li>
      </ul>
    </header>
  );
}

export default HeaderComponent;
