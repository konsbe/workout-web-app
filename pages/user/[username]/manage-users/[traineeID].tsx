import React from "react";
import { useState } from "react";
import FullPicker from "../../../../components/DatePickers/FullPicker";
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
      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <FullPicker />
        <WeekForm
          handleSubmit={handleSubmit}
          weekName={weekName}
          setWeekName={setWeekName}
        />
      </div>
      <WeekComponent sched={sched} />
    </>
  );
};

export default Week;
