"use client";

import AuthHandler from "@/components/auth/authHandler";
import HeaderComponent from "@/components/header/header";
import api from "@/http/api";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "@/hook/useAuth";
import CourseBtn from "@/components/thirdCell/courseBtn";
import styles from "./styles.module.scss";
import { logoutHandler } from "@/handlers/logoutHandler";
import { unsetUser } from "@/store/userSlice";
import { logOut } from "@/store/authSlice";
import { useDispatch } from "react-redux";

interface Props {}

function Page(props: Props) {
  const {} = props;
  const { isAuth } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();

  const {
    data: courseIdData1,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["courseIdData1"],
    queryFn: () =>
      api.get(`/course/subscribed`).then((res) => {
        return res.data;
      }),
    enabled: isClient && isAuth,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <>
      <AuthHandler />
      <HeaderComponent />

      <main className={styles.main}>
        <h1>Ваши курсы</h1>
        {!isLoading && !isError && !!courseIdData1 ? (
          courseIdData1.map((course: any) => (
            <CourseBtn
              key={course.id}
              id={course.id}
              text={course.name}
              description={course.description}
              icon={course.icon}
            />
          ))
        ) : (
          <p>Еще не записан</p>
        )}
      </main>
      <p
        style={{
          color: "red",
          margin: "0 auto",
          textAlign: "center",
          marginTop: "5vh",
          cursor: "pointer",
        }}
        onClick={() => {
          logoutHandler();
          dispatch(unsetUser());
          dispatch(logOut());
          localStorage.removeItem("token");
        }}
      >
        ВЫЙТИ
      </p>
    </>
  ) : null;
}

export default Page;
