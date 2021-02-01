import { gql } from 'apollo-boost';

const GET_EMPLOYEES = gql`
  query {
    getEmployees {
      id,
      name,
      jobTitle,
      age,
      userName,
      hireDate
    }
  }
`;

const GET_EMPLOYEES_BY_NAME = gql`
  query ($name: String!) {
    getEmployeesByName(name: $name) {
      id,
      name,
      jobTitle,
      age,
      userName,
      hireDate
    }
  }
`;

const SORT_EMPLOYEES = gql`
  query($sortKey: String!, $sortDirection: String!, $dataType: String!) {
    sortEmployees(
      sortKey: $sortKey
      sortDirection: $sortDirection
      dataType: $dataType
    ) {
      id,
      name
      jobTitle
      age
      userName
      hireDate
    }
  }
`;

const REMOVE_EMPLOYEE = gql`
  mutation($id: String!) {
    removeEmployee(id: $id) {
      id,
      name
      jobTitle
      age
      userName
      hireDate
    }
  }
`;

export {
    GET_EMPLOYEES_BY_NAME,
    GET_EMPLOYEES,
    REMOVE_EMPLOYEE,
    SORT_EMPLOYEES
};