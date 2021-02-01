import { SortDirection } from "./sort-direction.enum";

export interface State {
  employeeName: string;
  sortKey: string;
  sortDirection: SortDirection | false;
  dataType: string;
}
