import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DefinedRange } from "react-date-range";
import { useState } from "react";
import { timeStampToYYYYMMDD } from "./datePickersUtils";

const FullPicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [hide, setHide] = useState(true);

  const DateComponent = React.useCallback(
    ({ startDate, endDate, hide, setHide }: any): JSX.Element => {
      return (
        <div
          style={{
            width: "332px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <span>{startDate}</span>
          <span>{endDate}</span>
          <span onClick={() => setHide(!hide)}>arrow</span>
        </div>
      );
    },
    [state, setState]
  );

  return (
    <div>
      <div style={{ width: "587px" }}>
        <DateComponent
          startDate={`${timeStampToYYYYMMDD(
            new Date(
              state[0]?.startDate.setHours(state[0]?.startDate.getHours() + 1)
            )
          )} `}
          endDate={timeStampToYYYYMMDD(
            new Date(
              state[0]?.endDate.setHours(state[0]?.endDate.getHours() + 1)
            )
          )}
          // endDate={state[0]?.startDate.toISOString().substring(0, 10)}
          hide={hide}
          setHide={setHide}
        />
      </div>
      <div style={{ display: hide ? "none" : "flex", flexDirection: "row" }}>
        <DateRange
          editableDateInputs={true}
          onChange={(item: any) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          className="date-range-picker"
        />
        <DefinedRange
          onChange={(item: any) => setState([item.selection])}
          ranges={state}
        />
      </div>
    </div>
  );
};

export default FullPicker;
