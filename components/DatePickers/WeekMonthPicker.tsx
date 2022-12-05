import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import isBetweenPlugin from "dayjs/plugin/isBetween";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";

dayjs.extend(isBetweenPlugin);

interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay",
})<CustomPickerDayProps>(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  }),
  ...(isLastDay && {
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  }),
})) as React.ComponentType<CustomPickerDayProps>;

export const WeekMonthPicker = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-07"));

  const start = value?.startOf("week");
  const end = value?.endOf("week");
  const arr = [...Array(parseInt(end["$D"]) - parseInt(start["$D"]) + 1)];
  console.log("arr: ", arr);
  const renderWeekPickerDay = React.useCallback(
    (
      date: Dayjs,
      selectedDates: Array<Dayjs | null>,
      pickersDayProps: PickersDayProps<Dayjs>
    ) => {
      if (!value) {
        return <PickersDay {...pickersDayProps} />;
      }

      const start = value.startOf("week");
      const end = value.endOf("week");

      const dayIsBetween = date.isBetween(start, end, null, "[]");
      const isFirstDay = date.isSame(start, "day");
      const isLastDay = date.isSame(end, "day");

      return (
        // <CustomPickersDay
        //   {...pickersDayProps}
        //   disableMargin
        //   dayIsBetween={dayIsBetween}
        //   isFirstDay={isFirstDay}
        //   isLastDay={isLastDay}
        // />
        // <>
        // <span>hello my ame is</span>
        // </>
        <></>
      );
    },
    [value]
  );

  console.log("start: ", start["$D"]);
  console.log("end: ", end["$D"]);
  console.log("value: ", value);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          label="Week picker"
          showDaysOutsideCurrentMonth={true}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          // renderLoading={renderWeekPickerDay}
          renderDay={renderWeekPickerDay}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="'Week of' MMM d"
        />
      </LocalizationProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        {[...Array(parseInt(end["$D"]) - parseInt(start["$D"]) + 1)].map(
          (i, index) => {
            return <div key={index}> {parseInt(start["$D"]) + index}</div>;
          }
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <button
          onClick={(newValue) => {
            setValue(value - 7);
          }}>
          +
        </button>
        <button
          onClick={(newValue) => {
            setValue(newValue);
          }}>
          -
        </button>
      </div>
    </div>
  );
};

export default WeekMonthPicker;
