import Button from "@mui/material/Button";
import React from "react";
// import Tasks from "./Tasks";
// import Day from "./Day";
import { useState } from "react";
import { FaHatWizard } from "react-icons/fa";
import PaperContentComponent from "../../../../components/DatePickers/FullPicker";
import WeekMonthPicker from "../../../../components/DatePickers/WeekMonthPicker";
import DayForm from "../../../../components/Forms/DayForm";
import ProfileDataComponent from "../../../../components/Forms/ProfileForm";
import WeekForm from "../../../../components/Forms/WeekForm";
import styles from "../../../../styles/Forms.module.css";
import { INITIAL_TRAINER_DATA } from "../../../../types/types";

// var arrOfobj = [
//   {
//     ["week 1"]: {
//       ["day 1"]: { exercise: "deadlift" },
//       ["day 2"]: { exercise: "bench press" },
//       ["day 3"]: { exercise: "shoulder press" },
//     },
//   },
// ];

let sched: any = {};
const Week = () => {
  const [weekName, setWeekName] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    sched = { [`${weekName}`]: {}, ...sched };
    // sched[`${weekName}`] = {};
    setWeekName("");
  };
  // Object.entries(sched).map((key,value) => console.log(...key,value))
  const WeekComponent = React.useCallback(
    ({ sched }: { sched: Array<{}> }) => {
      return (
        <div className={styles.container}>
          {Object.entries(sched)?.map((key, value) => {
            return (
              <div className={styles.addUserExercise} key={value}>
                <DayForm weekName={key} weekToSchedule={sched} value={value} />
              </div>
            );
          })}
        </div>
      );
    },
    [handleSubmit]
  );
  return (
    <>
      <ProfileDataComponent
        trainerData={INITIAL_TRAINER_DATA}
        setTrainerData={() => {}}
        uploadImage={() => {}}
        header={"Trainee Profile Data"}
        errorField={[""]}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <WeekForm
          handleSubmit={handleSubmit}
          weekName={weekName}
          setWeekName={setWeekName}
        />
        <WeekMonthPicker />
        <PaperContentComponent/>
      </div>
      <WeekComponent sched={sched} />
    </>
  );
};

export default Week;
