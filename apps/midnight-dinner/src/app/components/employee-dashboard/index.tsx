import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';

import './styles.scss';
import { Employee } from '../../models/employee.model';
import { GET_EMPLOYEES, GET_EMPLOYEES_BY_NAME, REMOVE_EMPLOYEE, SORT_EMPLOYEES } from './queries';
import { SortingCriteria } from '../../models/sorting-criteria.model';
import ListOfItems from './../list-of-items/index';
import SearchElement from './../search-element';

export default function EmployeeDashboard () {
  const [employeeName, setEmployeeName] = useState<string>('');
  const [employeeId, setEmployeeId] = useState<string>('');
  const [
    { sortKey, sortDirection, dataType },
    setSortingCriteria,
  ] = useState<SortingCriteria>({} as SortingCriteria);
  const { loading, data: allEmployees } = useQuery<{ getEmployees: Employee[] }>(
    GET_EMPLOYEES
  );
  const { data: employeeByName } = useQuery<{ getEmployeesByName: Employee[] }>(
    GET_EMPLOYEES_BY_NAME,
    {
      variables: { name: employeeName }
    }
  );
  const [removeEmployee, { data: remainingEmployees }] = useMutation(
    REMOVE_EMPLOYEE
  );
  // const { data: employeesSorted } = useQuery<{ sortEmployees: Employee[] }>(
  //   SORT_EMPLOYEES,
  //   {
  //     variables: { sortKey: sortKey, sortDirection: sortDirection, dataType: dataType },
  //   }
  // );
  const [employees, setEmployee] = useState<Employee[]>();

  /**
   * Executed when removing an employee
   */
  const handleRemove = (row: Employee): void => {
    if (window.confirm('Do you want to delete this employee?')) {
      const employeeId = row.id;

      setEmployeeId(employeeId);
      removeEmployee({ variables: { id: employeeId } });
      //setEmployeeId('');
      setEmployee(remainingEmployees);
    }
  }

  /**
   * Handles search for a particular employee
   * @params searchValue - Value to be searched
   */
  const handleSearch = (searchValue: string): void => {
    setEmployeeName(searchValue);
    setEmployee(employeeByName?.getEmployeesByName);
  }

  const getData = (): Employee[] => {
    return remainingEmployees?.removeEmployee || employeeByName?.getEmployeesByName || allEmployees?.getEmployees;
    // employeesSorted ||          // Sorting
    // employeeByName ||           // Search
    // allEmployees?.getEmployees  // All employees
  }

  if (loading) return <p>Loading ...</p>;

  return (
    <div className="employee-dashboard">
      <div className="employee-dashboard__search-wrapper">
        <span className="employee-dashboard__employee-label">Employees</span>
        <span>
          <SearchElement clickHandler={handleSearch} />
        </span>
      </div>
      <ListOfItems rowsData={ getData() } deleteRow={handleRemove}/>
    </div>
  );
}
