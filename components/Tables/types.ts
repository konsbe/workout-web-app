export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface Data {
  id: number;
  name: string;
  age: number;
  weight: number;
  payment: number | string;
  date: number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
  info: string;
}

export type Order = "asc" | "desc";

export interface EnhancedTableToolbarProps {
  numSelected: number;
}