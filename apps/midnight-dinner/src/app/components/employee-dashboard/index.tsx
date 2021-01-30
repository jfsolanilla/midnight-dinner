import React from 'react';

import ListOfItems from './../list-of-items/index';
import SearchElement from './../search-element';
import './styles.scss';

export default function EmployeeDashboard () {
  return (
    <div className="employee-dashboard">
      <div className="employee-dashboard__search-wrapper">
        <span className="employee-dashboard__employee-label">Employees</span>
        <span><SearchElement /></span>
      </div>
      <ListOfItems />
    </div>
  );
}
