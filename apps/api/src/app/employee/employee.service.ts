import { Injectable } from '@nestjs/common';

import Employee from './employee.model';

@Injectable()
export class EmployeeService {
  private employeesRemoved = [];
  private employees: Employee[] = [
    {
      id: '1',
      name: 'ian B',
      jobTitle: 'Founder & CEO',
      age: 23,
      userName: 'jf',
      hireDate: '02/25/2021'
    },
    {
      id: '2',
      name: 'Voltron Ultron',
      jobTitle: 'Head chef',
      age: 30,
      userName: 'Vultron',
      hireDate: '05/02/2021'
    },
    {
      id: '3',
      name: 'Voltron Ultron Sullivan',
      jobTitle: 'Better half',
      age: 30,
      userName: 'VultronS',
      hireDate: '05/03/2020'
    }
  ];

  /**
   * Gets list of employees
   * @returns List of employees as an array
   */
  get(): Employee[] {
    return this.employees.filter(employee => !this.employeesRemoved.includes(employee.id));
  }

  /**
   * Removes employee received as param
   * @param id - Employee id
   * @returns List of employees as an array
   */
  remove(id: string): Employee[] {
    this.employeesRemoved.push(id);

    return this.get();
  }

  /**
   * Sorts employee list based on params received
   * @param sortKey - Key to be sorted
   * @param sortDirection - ASC OR DESC - Uppercase values
   * @param dataType - Data type of the key to be sorted
   * @returns Sorted list of employees as an array
   */
	sortEmployees(sortKey: string, sortDirection: string, dataType: string): Employee[] {
    const employees = this.get();

		if (!employees.length) {
			return employees;
    }

		switch (dataType) {
			case "TEXT":
				employees.sort((a, b) => {
					const nameA = a[sortKey].toUpperCase();
          const nameB = b[sortKey].toUpperCase();

					return this.getSortedBasedOnDirection(sortDirection, nameA, nameB);
        });

        break;

			case "NUMERIC":
				employees.sort((a, b) => {
					const nameA = a[sortKey] ? +a[sortKey] : 0;
          const nameB = b[sortKey] ? +b[sortKey] : 0;

					return this.getSortedBasedOnDirection(sortDirection, nameA, nameB);
        });

        break;

			case "DATE":
				employees.sort((a, b) => {
					const nameA = new Date(a[sortKey]);
          const nameB = new Date(b[sortKey]);

					return this.getSortedBasedOnDirection(sortDirection, nameA, nameB);
        });

				break;
    }

		return employees;
  }

  /**
   * Gets numeric value to define the direction of the sorting process
   * @param sortDirection - ASC OR DESC - Uppercase values
   * @param valueA
   * @param valueB
   * @returns Numeric value to define the sort direction
   */
  private getSortedBasedOnDirection(sortDirection: string, valueA: any, valueB: any): number {
		switch (sortDirection) {
			case "ASC":
				if (valueA < valueB) {
					return -1;
        }

				if (valueA > valueB) {
					return 1;
        }

        break;

			case "DESC":
				if (valueA < valueB) {
					return 1;
        }

				if (valueA > valueB) {
					return -1;
        }

				break;
			default:
				return 0;
		}
	}
}
