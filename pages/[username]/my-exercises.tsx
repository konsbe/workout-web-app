import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "../../styles/Exercises.module.css"
const exercises = [
  { youtubeURL: "asd", exerciseName: "1asd", imgURL: "asd", documentID: "asd" },
  { youtubeURL: "asd", exerciseName: "2asd", imgURL: "asd", documentID: "asd" },
  { youtubeURL: "asd", exerciseName: "3asd", imgURL: "asd", documentID: "asd" },
  { youtubeURL: "asd", exerciseName: "4asd", imgURL: "asd", documentID: "asd" },
];

export const Exercises = () => {
  return (
    <>
      <div>Exercises</div>
      <div className={styles.exercises}>
        <h3 className={styles.exerciseHeader}>Exercises</h3>
        {exercises.map((exercise, index) => {
          const { youtubeURL, exerciseName, imgURL, documentID } = exercise;
          return (
            <div className={styles.exerciseDetails} key={index}>
              <span>{exerciseName}</span>

              <span>{youtubeURL}</span>

              <span>{imgURL}</span>

              <span className="deleteBtn">
                <FaTimes
                  style={{ color: "red", cursor: "pointer" }}
                  // onClick={() => dispatch(deleteExerciseStart(documentID))}
                />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Exercises;
