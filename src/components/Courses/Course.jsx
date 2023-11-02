import { Box, Grid, TextField } from "@mui/material";
import * as React from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "vishal", firstName: "palla", age: 28 },
  { id: 11, lastName: "vikas", firstName: "palla", age: 28 },
  { id: 12, lastName: "ajith", firstName: "palla", age: 32 },
  { id: 13, lastName: "Gayathri", firstName: "palla", age: 32 },
];

const InputBox = ({ edit, setEdit }) => {
  return (
    <TextField
      focused
      maxRows={1}
      sx={{ width: "50%" }}
      size="small"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setEdit(!edit);
        }
      }}
    />
  );
};

const TableRow = ({ row, field }) => {
  const [edit, setEdit] = React.useState();
  return (
    <Grid item xs={2} component="span" onDoubleClick={() => setEdit(!edit)}>
      {edit ? <InputBox edit={edit} setEdit={setEdit} /> : row[field]}
    </Grid>
  );
};

export default function DataTable() {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid
        container
        mr={2}
        sx={{
          boxShadow: "2px 2px 4px rgb(68, 67, 67)",
          paddingY: "18px",
          fontWeight: "bold",
        }}
      >
        {columns.map((head) => (
          <Grid
            key={head.field}
            item
            xs={head.field === "fullName" ? 4 : 2}
            textAlign={"left"}
            sx={{ paddingX: head.field === "id" && "18px", textAlign: "left" }}
            component="span"
          >
            {head.headerName}
          </Grid>
        ))}
      </Grid>
      <br />
      {rows.map((row) => (
        <Grid
          key={row.id}
          container
          sx={{
            boxShadow: "2px 2px 4px rgb(68, 67, 67)",
            padding: "18px",
            my: 2,
            textAlign: "left",
          }}
        >
          <TableRow row={row} field={"id"} />
          <TableRow row={row} field={"firstName"} />
          <TableRow row={row} field={"lastName"} />
          <TableRow row={row} field={"age"} />
          <Grid item xs={4} component="span">
            {row.firstName + " " + row.lastName}
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
