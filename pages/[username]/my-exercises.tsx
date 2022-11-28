import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import ExerciseForm from "../../components/Forms/ExerciseForm";
import ModalComponent from "../../components/ModalComponent";
import styles from "../../styles/Exercises.module.css"
const exercises = [
  { youtubeURL: "asd", exerciseName: "1asd", imgURL: "asd", documentID: "asd" },
  { youtubeURL: "asd", exerciseName: "2asd", imgURL: "asd", documentID: "asd" },
  { youtubeURL: "asd", exerciseName: "3asd", imgURL: "asd", documentID: "asd" },
  { youtubeURL: "asd", exerciseName: "4asd", imgURL: "asd", documentID: "asd" },
];

export const Exercises = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleOpenModal = () => {
    if(showModal) setShowModal(!showModal);
  };

  return (
    <>
      <div>Exercises</div>
      <Button onClick={toggleModal}>Add Exercise</Button>
      <ModalComponent
        hideModal={showModal}
        toggleModal={toggleModal}
        modalHeader={"add new exercise"}>
        <ExerciseForm toggleModal={toggleModal}  />
      </ModalComponent>
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
