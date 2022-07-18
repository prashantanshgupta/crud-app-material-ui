import React, { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";

import { editUser, getUser } from "../service/api";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    let response = await getUser(id);
    setUser(response.data);
  };
  const onValueChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    setUser({
      name: "",
      username: "",
      email: "",
      phone: "",
    });
    navigate("/all");
  };
  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={editUserDetails}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
