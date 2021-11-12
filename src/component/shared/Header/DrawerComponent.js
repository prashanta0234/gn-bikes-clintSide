import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List className="nav">
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/home" activeClassName="active">
                Home
              </NavLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/bikes" activeClassName="active">
                Bikes
              </NavLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/about" activeClassName="active">
                About US
              </NavLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/contact" activeClassName="active">
                Contact Us
              </NavLink>
            </ListItemText>
          </ListItem>
          <Divider />

          <Divider />
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "red", fontSize: "40px" }} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
