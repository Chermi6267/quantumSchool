"use client";

import AuthHandler from "@/components/auth/authHandler";
import HeaderComponent from "@/components/header/header";
import api from "@/http/api";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styles from "./styles.module.scss";
import useAuth from "@/hook/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { error } from "console";

interface Props {}

function Page(props: Props) {
  const {} = props;
  const { courseId } = useParams();
  const { isAuth } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const clientCondition = isAuth && isClient;
  const router = useRouter();

  const subscribeHandler = () => {
    if (!isAuth) {
      router.push("/auth");
    } else {
      api
        .post(`/course/subscribe/${courseId}`, { subscribe: !isSubscribed })
        .then((res) => {
          refetch();
          toast.success(
            `Вы успешно ${
              isSubscribed ? "отписались от курса" : "записались на курс"
            }`,
            {
              style: {
                background: "rgb(36, 36, 36)",
                color: "#fa812f",
              },

              iconTheme: {
                primary: "green",
                secondary: "#fa812f",
              },
            }
          );
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            style: {
              background: "rgb(36, 36, 36)",
              color: "#fa812f",
            },

            iconTheme: {
              primary: "#838383",
              secondary: "#fa812f",
            },
          });
        });
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    data: courseIdData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["courseIdData"],
    queryFn: () => api.get(`/course/byId/${courseId}`).then((res) => res.data),
    enabled: !!courseId,
  });

  useEffect(() => {
    api.get(`/course/isSubscribed/${courseId}`).then((res) => {
      setIsSubscribed(res.data && isAuth);
    });
  }, [courseIdData]);

  return (
    <>
      <AuthHandler />
      <HeaderComponent />
      <Suspense>
        <main>
          {!isLoading && !isError && courseIdData ? (
            <div className={styles.course}>
              <div
                style={{ backgroundImage: `url(${courseIdData.icon})` }}
                className={styles.course__img}
              />
              <h1>{courseIdData.name}</h1>

              <p>Цена: {courseIdData.price} ₽</p>
              <p style={{ marginTop: "3vh" }}>{courseIdData.description}</p>

              <p style={{ marginTop: "3vh" }}>
                Уже записались: {courseIdData.countOfUsers}
              </p>

              <div className={styles.course__reg_button_cont}>
                <button
                  onClick={subscribeHandler}
                  style={
                    !clientCondition
                      ? { opacity: 0.5, cursor: "not-allowed" }
                      : { opacity: 1, cursor: "pointer" }
                  }
                  className={styles.course__reg_button}
                >
                  {isSubscribed ? "Отписаться c курса" : "Записаться на курс"}
                </button>
              </div>

              {!clientCondition ? (
                <p style={{ marginTop: "3vh" }}>Сначала зарегистрируйтесь</p>
              ) : (
                ""
              )}
            </div>
          ) : isError ? (
            <p>ошибка</p>
          ) : (
            <p>Подождите</p>
          )}
        </main>
        <Toaster position="bottom-center" />
      </Suspense>
    </>
  );
}

export default Page;
