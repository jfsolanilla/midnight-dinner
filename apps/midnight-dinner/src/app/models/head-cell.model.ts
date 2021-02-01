import { DataType } from "./data-type.enum";
import { Employee } from "./employee.model";

export interface HeadCell {
  id: keyof Employee;
  label: string;
  dataType: DataType;
}
