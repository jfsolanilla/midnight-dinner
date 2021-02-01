import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { headCells } from './constants';
import { ListProps } from '../../models/list-props.model';
import { StyledTableCell, StyledTableRow, useStyles } from './styles';

export default function ListOfItems({
  rowsData,
  deleteRow,
  sortRow,
  orderBy,
  order,
}: ListProps) {
  const classes = useStyles();
  const EmptyTable = () => {
    return (
      <TableRow style={{ height: 20 }}>
        <TableCell>no results</TableCell>
      </TableRow>
    );
  };

  const getSortDirection = (order: boolean): 'asc' | 'desc' => {
    return order ? 'asc' : 'desc';
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                padding={'default'}
                sortDirection={
                  orderBy === headCell.id ? getSortDirection(order) : false
                }
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={
                    orderBy === headCell.id ? getSortDirection(order) : 'asc'
                  }
                  onClick={() =>
                    sortRow(headCell.id, !order, headCell.dataType)
                  }
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <span className={classes.visuallyHidden}>
                      {getSortDirection(order) === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </span>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData?.length ? (
            rowsData.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="left">
                  <div>{row.name}</div>
                  <strong>{row.jobTitle}</strong>
                </StyledTableCell>
                <StyledTableCell id={row.id} align="left">
                  {row.age}
                </StyledTableCell>
                <StyledTableCell id={row.id} align="left">
                  {row.userName}
                </StyledTableCell>
                <StyledTableCell id={row.id} align="left">
                  {row.hireDate}
                </StyledTableCell>
                <StyledTableCell
                  id={row.id}
                  align="left"
                  className={classes.actionCell}
                >
                  <CreateIcon className={classes.actionIcons} />
                  <VisibilityIcon className={classes.actionIcons} />
                  <DeleteIcon
                    onClick={() => deleteRow(row)}
                    className={classes.actionIcons}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <EmptyTable />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
