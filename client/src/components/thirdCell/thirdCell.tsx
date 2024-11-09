import { useQuery } from "@tanstack/react-query";
import CourseBtn from "./courseBtn";
import styles from "./styles.module.scss";
import api from "@/http/api";
import { RefObject, useEffect, useState } from "react";

interface Props {
  ref: RefObject<HTMLDivElement>;
}

function ThirdCell(props: Props) {
  const { ref } = props;

  const {
    data: courseData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["courseData"],
    queryFn: () => api.get("/course").then((res) => res.data),
    enabled: true,
  });

  return (
    <div className={styles.third_cell} ref={ref}>
      <div className={styles["third_cell__about_us-paragraph"]}>
        <h1 className={styles.about_us__paragraph}> Курсы</h1>
      </div>

      <h1 className={styles.third_cell__title}>Открытые направления</h1>
      {!isLoading && !isError && courseData ? (
        courseData.map((course: any) => {
          return (
            <CourseBtn
              key={course.id}
              id={course.id}
              text={course.name}
              description={course.description}
              icon={course.icon}
            />
          );
        })
      ) : isError ? (
        <p>Произошла ошибка</p>
      ) : (
        <p>Подождите</p>
      )}
    </div>
  );
}

export default ThirdCell;

// import { useQuery } from "@tanstack/react-query";
// import CourseBtn from "./courseBtn";
// import styles from "./styles.module.scss";
// import api from "@/http/api";
// import { useEffect, useState } from "react";

// interface Props {}

// function ThirdCell(props: Props) {
//   const {} = props;
//   const [course, setCourse] = useState();

//   const {
//     data: courseData,
//     isLoading,
//     isError,
//     refetch,
//   } = useQuery({
//     queryKey: ["courseData"],
//     queryFn: () => api.get("/course").then((res) => res.data),
//     enabled: true,
//   });

//   useEffect(() => {
//     if (isError) {
//       setCourse([
//         {
//           id: 5,
//           name: "Космоквантум",
//           description:
//             "Кружок для детей, увлекающихся космосом и астрономией, включает практические занятия и исследовательские проекты",
//           price: "0",
//           catId: "1",
//           icon: "/kosmo.png",
//         },
//         {
//           id: 6,
//           name: "Аэроквантум",
//           description:
//             "Кружок для детей, интересующихся авиацией и аэродинамикой, с занятиями по аэромоделированию и дронам",
//           price: "0",
//           catId: "2",
//           icon: "/aero.png",
//         },
//         {
//           id: 7,
//           name: "Наноквантум",
//           description:
//             "Кружок для детей, интересующихся нанотехнологиями и материалами, занятия по микроструктурам и инновационным материалам",
//           price: "0",
//           catId: "3",
//           icon: "/it.png",
//         },
//         {
//           id: 8,
//           name: "ИТ-квантум",
//           description:
//             "Кружок для детей, интересующихся программированием и ИТ-технологиями, включает занятия по разработке, робототехнике и кибербезопасности",
//           price: "0",
//           catId: "4",
//           icon: "/nano.png",
//         },
//       ]);
//     }
//   }, [isError]);

//   return (
//     <div className={styles.third_cell}>
//       <div className={styles["third_cell__about_us-paragraph"]}>
//         <h1 className={styles.about_us__paragraph}> Курсы</h1>
//       </div>

//       <h1 className={styles.third_cell__title}>Открытые направления</h1>
//       {!isLoading && !isError && courseData ? (
//         courseData.map((course: any) => {
//           return (
//             <CourseBtn
//               key={course.id}
//               text={course.name}
//               link={`${course.icon}`}
//               icon={course.icon}
//             />
//           );
//         })
//       ) : isError ? (
//         course !== undefined ? (
//           course.map((c: any) => {
//             return (
//               <CourseBtn
//                 key={c.id}
//                 text={c.name}
//                 link={`${c.icon}`}
//                 icon={c.icon}
//               />
//             );
//           })
//         ) : (
//           "asdf"
//         )
//       ) : (
//         <p>Подождите</p>
//       )}
//     </div>
//   );
// }

// export default ThirdCell;
