import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router";

import { addUser } from "../service/api";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const onValueChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addUserDetails = async () => {
    await addUser(user);
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
      <Typography variant="h4">Add User</Typography>
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
        <Button variant="contained" onClick={addUserDetails}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
