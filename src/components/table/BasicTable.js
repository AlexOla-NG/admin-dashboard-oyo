import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, styled, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import EmptyTable from "../EmptyTable";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "mda",
    numeric: false,
    disablePadding: false,
    label: "MDA",
  },
  {
    id: "cadre",
    numeric: false,
    disablePadding: false,
    label: "Cadre",
  },
  {
    id: "gradeLevel",
    numeric: false,
    disablePadding: false,
    label: "Grade Level",
  },
  {
    id: "phoneNumber",
    numeric: true,
    disablePadding: false,
    label: "Phone number",
  },
  {
    id: "gender",
    numeric: false,
    disablePadding: false,
    label: "Gender",
  },
  {
    id: "passportStatus",
    numeric: false,
    disablePadding: false,
    label: "Passport status",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            // align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              color: "#393A4A",
              fontSize: "1rem",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    color: "#393A4A",
    fontSize: "1rem",
    whiteSpace: "nowrap",
  },
}));

const BasicTable = (props) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  // const [rows, setRows] = useState(props.mockData);
  const [rows, setRows] = useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <EnhancedTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        {rows.length > 0 ? (
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.mda}</StyledTableCell>
                <StyledTableCell align="left">{row.cadre}</StyledTableCell>
                <StyledTableCell align="left">{row.gradeLevel}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.phoneNumber}
                </StyledTableCell>
                <StyledTableCell align="left">{row.gender}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.passportStatus}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <EmptyTable {...props.data?.emptyData} />
        )}
      </Table>
    </TableContainer>
  );
};

export default BasicTable;

BasicTable.defaultProps = {
  mockData: [
    {
      name: "Al X",
      mda: "SWE",
      cadre: "Intern",
      gradeLevel: "007",
      phoneNumber: 8100283294,
      gender: "male",
      passportStatus: "submitted",
    },
    {
      name: "Mayor Wa",
      mda: "SWE",
      cadre: "Associate Dev",
      gradeLevel: "069",
      phoneNumber: 8035089071,
      gender: "male",
      passportStatus: "submitted",
    },
  ],
};
