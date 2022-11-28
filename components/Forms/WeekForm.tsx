import { Button } from "@mui/material";
import React from "react";
import styles from "./Forms.module.css";
export default function WeekForm(props: any) {
  const { handleSubmit, weekName, setWeekName } = props;
  return (
    <div className={styles.containerone}>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <header className="headerAddDay">
          {/* <h2>{weekName}</h2> */}
        </header>
        <div className="form-control">
          <label>Week: </label>
          <input
            type="text"
            placeholder="name the day"
            value={weekName}
            onChange={(e) => setWeekName(e.target.value)}
          />
        </div>
        <Button type="submit" className="btnTask btn-block">
          Add Week
        </Button>
      </form>
    </div>
  );
}
