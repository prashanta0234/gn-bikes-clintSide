import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Header.css";

import logo from "../../../images/logo.png";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CallIcon from "@mui/icons-material/Call";
import { Link, NavLink } from "react-router-dom";

// import Drawer from "./DrawerComponent";
import DrawerComponent from "./DrawerComponent";
import { useTheme } from "@material-ui/core";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { user, logOut } = useAuth();
  return (
    <div>
      <Box sx={{ p: 1, bgcolor: "#1B3E41", color: "#97ADAF" }}>
        <Container sx={{ display: "flex" }}>
          <Typography
            sx={{ display: "flex", justifyContent: "left", flexGrow: 1, p: 1 }}
          >
            <AddLocationIcon></AddLocationIcon> &nbsp; Mirpur 2, Dhaka,
            Bangladesh &nbsp; &nbsp; &nbsp; <CallIcon></CallIcon> &nbsp;
            01754540234
          </Typography>
          <Box sx={{ justifyContent: "right" }}>
            {user.email ? (
              <Box>
                <Link to="/deshbord">
                  <Button>Deshbord</Button>
                </Link>
                <Button onClick={logOut}>Logout</Button>
              </Box>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}
          </Box>
        </Container>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ bgcolor: "#bddeeb", boxShadow: 0, p: 1.5 }}
        >
          <Container>
            <Toolbar sx={{ m: 1 }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/home">
                  <img src={logo} width="150px" alt="" />
                </Link>
              </Typography>
              {isMobile ? (
                <DrawerComponent></DrawerComponent>
              ) : (
                <Box>
                  <Typography className="nav">
                    <NavLink to="/home" activeClassName="active">
                      Home
                    </NavLink>
                    <NavLink to="/bikes" activeClassName="active">
                      Bikes
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                      About US
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active">
                      Contact Us
                    </NavLink>
                  </Typography>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
