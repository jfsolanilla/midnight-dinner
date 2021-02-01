import { Employee } from "./employee.model";
import { SortDirection } from "./sort-direction.enum";

export interface ListProps {
  rowsData: Employee[];
  deleteRow: (row: Employee) => void;
  sortRow: (sortKey: string, sortDirection: SortDirection, dataType: string) => void;
  orderBy: string,
  order: SortDirection | false;
}