import Button from "@mui/material/Button";
import { type } from "os";
import React from "react";
import { useState } from "react";
import ExerciseTraineeForm from "./ExerciseTraineeForm";
import styles from "./Forms.module.css";
// var arrOfobj = [
//   {
//     ["week 1"]: {
//       ["day 1"]: { exercise: "deadlift" },
//       ["day 2"]: { exercise: "bench press" },
//       ["day 3"]: { exercise: "shoulder press" },
//     },
//   },
// ];

const DayForm = ({
  weekName,
  weekToSchedule,
  value,
}: {
  weekName: any;
  weekToSchedule: any;
  value: any;
}) => {
  const [dayName, setDayName] = useState("");
  const onSubmit = (event: any) => {
    event.preventDefault();
    weekToSchedule[`${weekName[0]}`] = {
      [`${dayName}`]: {},
      ...weekToSchedule[`${weekName[0]}`],
    };
    setDayName("");
  };

  return (
    <>
      <div className={styles.containerone}>
        <form className={styles.addForm} onSubmit={onSubmit}>
          <header className="headerAddDay">
            <h2>{weekName[0]}</h2>
          </header>
          <div className="form-control">
            <label>Day: </label>
            <input
              type="text"
              placeholder="name the day"
              value={dayName}
              onChange={(e) => setDayName(e.target.value)}
            />
          </div>
          <Button type="submit" className="btnTask btn-block">
            Add Day
          </Button>
        </form>
      </div>
      <div>
        {Object.entries(weekToSchedule[`${weekName[0]}`]).map((key, value) => {
          return <ExerciseTraineeForm key={value} dayName={key[0]} weekToSchedule={weekToSchedule} value={value} weekName={weekName[0]} />;
        })}
      </div>
    </>
  );
};

export default DayForm;
