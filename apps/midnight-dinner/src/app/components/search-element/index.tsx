import React from 'react';
import { OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { SearchProps } from '../../models/search-props.model';
import { useStyles } from './styles';

export default function SearchElement({clickHandler}: SearchProps) {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <OutlinedInput
        placeholder="Search by name"
        classes={{
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => clickHandler(event.target.value)}
      />
    </div>
  );
}