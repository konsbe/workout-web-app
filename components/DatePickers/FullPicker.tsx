import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";

const FullPicker = () => {
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
    compare: {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "compare",
    },
  });
  console.log(state)
  return (
    <DateRangePicker
      onChange={(item) => setState({ ...state, ...item })}
      // showSelectionPreview={true}
      // moveRangeOnFirstSelection={false}
      minDate={addDays(new Date(), 0)}
      maxDate={addDays(new Date(), 9000)}
      months={1}
      direction="vertical"
      scroll={{ enabled: true }}
      ranges={[state.selection, state.compare]}
      // ranges={state}
    />
  );
};

export default FullPicker;
{
  /* <DateRangePicker
onChange={(item) => setState({ ...state, ...item })}
months={1}
direction="vertical"
ranges={[state.selection, state.compare]}
/>; */
}
