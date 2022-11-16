import React, { useEffect } from "react";
import styles from "./Card.module.css";
const courses = [
  {
    courseName: "1 asd",
    courseMonths: "asd",
    imgURL: "asd",
    courseDescription: "asd",
    price: "asd",
    documentID: "asd",
  },
  {
    courseName: "2 asd",
    courseMonths: "asd",
    imgURL: "asd",
    courseDescription: "asd",
    price: "asd",
    documentID: "asd",
  },
  {
    courseName: "3 asd",
    courseMonths: "asd",
    imgURL: "asd",
    courseDescription: "asd",
    price: "asd",
    documentID: "asd",
  },
  {
    courseName: "4 asd",
    courseMonths: "asd",
    imgURL: "asd",
    courseDescription: "asd",
    price: "asd",
    documentID: "asd",
  },
  {
    courseName: "5 asd",
    courseMonths: "asd",
    imgURL: "asd",
    courseDescription: "asd",
    price: "asd",
    documentID: "asd",
  },
  {
    courseName: "6 asd",
    courseMonths: "asd",
    imgURL: "asd",
    courseDescription: "asd",
    price: "asd",
    documentID: "asd",
  },
  {
    courseName: "6 asd",
    courseMonths: "asd",
    imgURL: "asd",
    courseDescription: "asd",
    price: "asd",
    documentID: "asd",
  },
];

const Courses = () => {
  return (
    <div className={styles.coursePage}>
      <h3 className={styles.coursesHeader}></h3>
      <div>
        <div className={styles.courses}>
          {courses.map((course, index) => {
            const {
              courseName,
              courseMonths,
              imgURL,
              courseDescription,
              price,
              documentID,
            } = course;
            const configCourse = {
              ...course,
            };
            return (
              <div className={styles.child} key={index}>
                <div className={styles.card} key={index}>
                  {/* <Program {...configCourse} /> */}
                  <div className={styles.cardImage}>
                    {/* <img src={image3} alt=""></img> */}
                  </div>
                  {/* {imgUrl} */}
                  <div className={styles.cardText}>
                    <h2 className={styles.cardName}>{courseName}</h2>

                    <p>{courseDescription}</p>
                  </div>
                  <div className={styles.cardStats}>
                    <div className={styles.stat}>
                      <div className={styles.value}>{courseMonths}</div>
                      <div className={styles.type}>Months</div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.value}>{price}</div>
                      <div className={styles.type}>Euro</div>
                    </div>
                    <div className={styles.stat}>
                      {/* <div class="value">
                    <FaTimes
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => dispatch(deleteCourseStart(documentID))}
                    />
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;