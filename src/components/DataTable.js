import React from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./DataTable.css";

const paddStyle = {
  margin: "0px 50px",
};

const DataTable = ({ userDataList, onEdit, onDelete }) => {
  return (
    <div style={paddStyle}>
      <TableContainer
        component={Paper}
        sx={{
          backdropFilter: "blur(5px)",
          backgroundColor: "#092635;",
          marginTop: "10px",
          overflowX: "auto",
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#ffffff" }}>ID</TableCell>
              <TableCell sx={{ color: "#ffffff" }}>NAME</TableCell>
              <TableCell sx={{ color: "#ffffff" }}>USER NAME</TableCell>
              <TableCell sx={{ color: "#ffffff" }}>EMAIL</TableCell>
              <TableCell sx={{ color: "#ffffff" }}>PHONE</TableCell>
              <TableCell sx={{ color: "#ffffff" }}>WEBSITE</TableCell>
              <TableCell sx={{ color: "#ffffff" }}>EDIT</TableCell>
              <TableCell sx={{ color: "#ffffff" }}>DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDataList.map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{ color: "#ffffff" }}>{user.id}</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>{user.name}</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>{user.username}</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>{user.email}</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>{user.phone}</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>{user.website}</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>
                  <Button
                    color="warning"
                    variant="text"
                    startIcon={<EditIcon />}
                    onClick={() => onEdit(user)}
                  ></Button>
                </TableCell>
                <TableCell sx={{ color: "#ffffff" }}>
                  <Button
                    color="error"
                    variant="text"
                    startIcon={<DeleteIcon />}
                    onClick={() => onDelete(user.id)}
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
