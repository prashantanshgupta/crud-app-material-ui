import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  styled,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../service/api";

const StyledTable = styled(Table)`
  margin: 50px auto 0 auto;
  width: 90%;
`;
const Thead = styled(TableRow)`
  background: #000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;
const Tbody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState([]);
  useEffect(() => {
    getUsersDetails();
  }, [render]);

  const getUsersDetails = async () => {
    const response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    setRender((prev) => !prev);
  };
  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <Tbody key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: "10px", textDecoration: "none" }}
                // component={Link}
                // to={`/edit/${user.id}`}
              >
                <Link
                  to={`/edit/${user.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Edit
                </Link>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserDetails(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </Tbody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
