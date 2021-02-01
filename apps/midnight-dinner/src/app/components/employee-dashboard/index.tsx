import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';

import './styles.scss';
import { Employee } from '../../models/employee.model';
import { GET_EMPLOYEES, REMOVE_EMPLOYEE } from './queries';
import { State } from '../../models/state.model';
import { StateArg } from '../../models/state-arg.model';
import ListOfItems from './../list-of-items/index';
import SearchElement from './../search-element';

export default function EmployeeDashboard() {
  const [allValues, setAllValues] = useState<State>({
    employeeName: '',
    sortKey: '',
    sortDirection: '',
    dataType: '',
  });
  const { loading, data } = useQuery<{ getEmployees: Employee[] }>(
    GET_EMPLOYEES,
    {
      variables: {
        name: allValues.employeeName,
        sortKey: '',
        sortDirection: '',
        dataType: '',
      },
    }
  );
  const [removeEmployee] = useMutation(
    REMOVE_EMPLOYEE,
    {
      refetchQueries: [
        {
          query: GET_EMPLOYEES,
          variables: {
            name: allValues.employeeName,
            sortKey: '',
            sortDirection: '',
            dataType: '',
          },
        },
      ],
      fetchPolicy: 'no-cache'
    }
  );


  /**
   * Executed when removing an employee
   */
  const handleRemove = (row: Employee): void => {
    if (window.confirm('Do you want to delete this employee?')) {
      removeEmployee({ variables: { id: row.id } });
    }
  };

  /**
   * Handles search for a particular employee
   * @params searchValue - Value to be searched
   */
  const handleSearch = (searchValue: string): void => {
    changeHandler([{ employeeName: searchValue }]);
  };

  /**
   * Handles changes in component's states
   * @params parameters - State values to be updated in the component
   */
  const changeHandler = (parameters: StateArg[]): void => {
    parameters.forEach((parameterKey) => {
      setAllValues({ ...allValues, ...parameterKey });
    });
  };

  return (
    <div className="employee-dashboard">
      <div className="employee-dashboard__search-wrapper">
        <span className="employee-dashboard__employee-label">Employees</span>
        <span>
          <SearchElement
            clickHandler={handleSearch}
            searchValue={allValues.employeeName}
          />
        </span>
      </div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ListOfItems rowsData={data?.getEmployees} deleteRow={handleRemove} />
      )}
    </div>
  );
}
