import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { OutlinedInput } from '@material-ui/core';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import './styles.scss';
import { SearchProps } from '../../models/search-props.model';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);
export default function SearchElement({clickHandler}: SearchProps) {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className="search-icon">
        <SearchIcon />
      </div>
      <OutlinedInput
        placeholder="Search…"
        classes={{
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => clickHandler(event.target.value)}
      />
    </div>
  );
}