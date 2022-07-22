import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TableModules = ({ headers = [], data = [] , onSelectRow=()=>{}}) => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "#E0EDDE",
          color: theme.palette.common.gray,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "10px"}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table sx={{ minWidth: 650 }} stickyHeader>
          <TableHead>
            <TableRow>
              {headers?.length &&
                headers.map((row,i) => (
                  <StyledTableCell align="center" key={i}>{row}</StyledTableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.length &&
              data.map((row, i) => (
                <TableRow
                  hover
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {Object.keys(row).map((key, index) => (
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      key={index}
                      onClick={() => {
                        onSelectRow(index,i)
                      }}
                    >
                      {row[key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableModules;
