import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';

import './styles.scss';
import { Employee } from '../../models/employee.model';
import { GET_EMPLOYEES, GET_EMPLOYEES_BY_NAME, REMOVE_EMPLOYEE, SORT_EMPLOYEES } from './queries';
import ListOfItems from './../list-of-items/index';
import SearchElement from './../search-element';
import { ContactSupportOutlined } from '@material-ui/icons';

export default function EmployeeDashboard () {
  const { loading, data: allEmployees } = useQuery<{ employees: Employee[] }>(
    GET_EMPLOYEES
  );

  //************************************* */
  // Used to remove employee
  // const [employeeId, setEmployeeId] = useState<string>('');
  // const [removeEmployee, { data }] = useMutation<{ employees: Employee[] }>(REMOVE_EMPLOYEE);

  // useEffect(() => {
  //   if (data) {
  //     const { removeEmployee } = data;
  //     const { id } = removeEmployee;
  //   }
  // }, [data]);

  // const handleRemoveEmployee = (employeeId: string): void => {
  //   if (window.confirm('Do you want to delete this employee?')) {
  //     removeEmployee({ variables: { id: employeeId } });
  //     setEmployeeId('');
  //   }
  // }
  //************************************* */
  // Used to sort employees
  const { data: employeesSorted } = useQuery<{ employees: Employee[] }>(SORT_EMPLOYEES, {
    variables: { sortKey: 'name', sortDirection: 'DESC', dataType: 'TEXT' }
  });

  //************************************* */
    // Used to get employees by name
    const { data: employeeByName } = useQuery<{ employees: Employee[] }>(GET_EMPLOYEES_BY_NAME, {
      variables: { name: searchValue }
    });


  // if (loading) return <p>Loading ...</p>;

  const ClickHandler = (searchValue: string) => {


    console.log(employeeByName);
  }

  return (
    <div className="employee-dashboard">
      <div className="employee-dashboard__search-wrapper">
        <span className="employee-dashboard__employee-label">Employees</span>
        <span>
          <SearchElement clickHandler={ClickHandler} />
        </span>
      </div>
      {/* <button onClick={ () => HandleSortEmployees('name', 'ASC', 'TEXT') }>
        <span>Login or Register</span>
      </button> */}
      <ListOfItems />
    </div>
  );
}
