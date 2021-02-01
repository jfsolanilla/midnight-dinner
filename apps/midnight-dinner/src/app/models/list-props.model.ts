import { Employee } from "./employee.model";

export interface ListProps {
  rowsData: Employee[];
  deleteRow: (row: Employee) => void;
}