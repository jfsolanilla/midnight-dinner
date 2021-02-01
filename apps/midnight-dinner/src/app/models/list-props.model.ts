import { Employee } from './employee.model';

export interface ListProps {
  rowsData: Employee[];
  deleteRow: (row: Employee) => void;
  sortRow: (sortKey: string, sortDirection: boolean, dataType: string) => void;
  orderBy: string;
  order: boolean;
}
