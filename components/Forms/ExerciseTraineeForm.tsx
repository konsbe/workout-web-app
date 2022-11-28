import Button from "@mui/material/Button";
import React from "react";
import { useState } from "react";
import styles from "./Forms.module.css";

const ExerciseTraineeForm = ({
  dayName,
  weekToSchedule,
  value,
  weekName,
}: {
  dayName: string;
  weekToSchedule: any;
  value: any;
  weekName: string;
}) => {
  const [exerciseName, setExerciseName] = useState("");
  const onSubmit = async (event: any) => {
    event.preventDefault();
    weekToSchedule[`${weekName}`][dayName] = await {
      [`${exerciseName}`]: {},
      ...weekToSchedule[`${weekName}`][dayName],
    };
    console.log(weekToSchedule);
    setExerciseName("");
  };

  return (
    <div>
      <div className={styles.containerone}>
        <form className={styles.addForm} onSubmit={onSubmit}>
          <header className="headerAddDay">
            <h2>{dayName}</h2>
          </header>
          <div className="form-control">
            <label>Exercise: </label>
            <input
              type="text"
              placeholder="Add Exercise"
              value={exerciseName}
              onChange={(e) => setExerciseName(e.target.value)}
            />
          </div>
          <Button type="submit" className="btnTask btn-block">
            Add Exercise
          </Button>
        </form>
      </div>
      <div className={styles.containertwo}>
        {Object.entries(weekToSchedule[`${weekName}`][dayName])?.map(
          (key, value) => {
            return <div key={value}>{key[0]}</div>;
          }
        )}
      </div>
    </div>
  );
};

export default ExerciseTraineeForm;
