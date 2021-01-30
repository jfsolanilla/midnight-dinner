import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

import './styles.scss';

export default function SearchElement () {
  return (
    <div className="search-element">
      <SearchIcon className="search-element__icon"/>
      <input
        className="search-element__input"
        placeholder="Search by name">
      </input>
    </div>
  );
}
