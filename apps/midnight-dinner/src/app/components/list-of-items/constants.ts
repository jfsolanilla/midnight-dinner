import { DataType } from "../../models/data-type.enum";
import { HeadCell } from "../../models/head-cell.model";

export const headCells: HeadCell[] = [
  { id: 'name', label: 'Name (Job Title)', dataType: DataType.text },
  { id: 'age', label: 'Age', dataType: DataType.numeric },
  { id: 'userName', label: 'Username', dataType: DataType.text },
  { id: 'hireDate', label: 'Hire Date', dataType: DataType.date },
];