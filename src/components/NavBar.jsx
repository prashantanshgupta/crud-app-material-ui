import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
const Header = styled(AppBar)`
  background: #111111;
`;
const Tabs = styled(NavLink)`
  margin: 20px;
  font-size: 20px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">Home</Tabs>
          <Tabs to="all">All Users</Tabs>
          <Tabs to="add">Edit Users</Tabs>
        </Toolbar>
      </Header>
      <Outlet />
    </>
  );
};

export default NavBar;
