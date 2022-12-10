import { Data, HeadCell, Order } from "./types";

export const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "Id",
    info: "",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Full Name",
    info: "VIew User's Profile",
  },
  {
    id: "age",
    numeric: true,
    disablePadding: false,
    label: "Age (years)",
    info: "",
  },
  {
    id: "weight",
    numeric: true,
    disablePadding: false,
    label: "Weight (kg)",
    info: "",
  },
  {
    id: "payment",
    numeric: true,
    disablePadding: false,
    label: "payment ($)",
    info: "",
  },
  {
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "Date (g)",
    info: "",
  },
];

function createData(
  id: number,
  name: string,
  age: number,
  weight: number,
  payment: number | string,
  date: number
): Data {
  return {
    id,
    name,
    age,
    weight,
    payment,
    date,
  };
}
  
export const rows = [
  createData(1, "John Doe", 305, 3.7, 67, 4.3),
  createData(2, "Eminem", 452, 25.0, 51, 4.9),
  createData(3, "Snoop DOg", 262, 16.0, 24, 6.0),
  createData(4, "Jesus Christ", 159, 6.0, 24, 4.0),
  createData(5, "Phil Anselmo", 356, 16.0, 49, 3.9),
  createData(6, "John Kragias", 408, 3.2, 87, 6.5),
  createData(7, "Jef Bezos", 237, 9.0, 37, 4.3),
  createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(9, "Naomi", 518, 26.0, 65, 7.0),
];

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}


export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
