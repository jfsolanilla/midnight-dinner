import React, { useState, useEffect } from 'react';
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
  const [{ sortKey, sortDirection, dataType }, setSortingCriteria] = useState<SortingCriteria>({} as SortingCriteria);
  const { loading, data: allEmployees } = useQuery<{ employees: Employee[] }>(
    GET_EMPLOYEES
  );
  const { data: employeeByName } = useQuery<{ employees: Employee[] }>(
    GET_EMPLOYEES_BY_NAME,
    {
      variables: { name: employeeName }
    }
  );
  const [removeEmployee, { data: remainingEmployees }] = useMutation(
    REMOVE_EMPLOYEE
  );
  const { data: employeesSorted } = useQuery<{ employees: Employee[] }>(
    SORT_EMPLOYEES,
    {
      variables: { sortKey: sortKey, sortDirection: sortDirection, dataType: dataType },
    }
  );

  /**
   * Executed when removing an employee
   */
  const handleRemove = (removeValue: string): void => {
    if (window.confirm('Do you want to delete this employee?')) {
      removeEmployee({ variables: { id: removeValue } });
      setEmployeeId('');
    }
  }

  /**
   * Handles search for a particular employee
   * @params searchValue - Value to be searched
   */
  // IMPORTANT THIS FUNCTION PROBABLY NOT NEEDED - ONLY WITH setEmployeeName WOULD BE ENOUGH
  // const handleSearch = (searchValue: string): void => {
  //   setEmployeeName(searchValue);
  // }

  // if (loading) return <p>Loading ...</p>;

  return (
    <div className="employee-dashboard">
      <div className="employee-dashboard__search-wrapper">
        <span className="employee-dashboard__employee-label">Employees</span>
        <span>
          <SearchElement clickHandler={setEmployeeName} />
        </span>
      </div>
      <button onClick={ () => handleRemove('2') }>
        <span>Login or Register</span>
      </button>
      <ListOfItems />
    </div>
  );
}
