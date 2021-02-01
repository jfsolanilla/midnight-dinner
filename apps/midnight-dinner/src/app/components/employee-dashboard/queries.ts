import { gql } from 'apollo-boost';

const GET_EMPLOYEES = gql`
  query($name: String!, $sortKey: String!, $sortDirection: String!, $dataType: String!) {
    getEmployees(name: $name, sortKey: $sortKey, sortDirection: $sortDirection, dataType: $dataType) {
      id,
      name,
      jobTitle,
      age,
      userName,
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
    GET_EMPLOYEES,
    REMOVE_EMPLOYEE
};