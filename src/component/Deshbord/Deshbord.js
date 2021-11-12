import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import ShowDeshbord from "./ShowDeshbord/ShowDeshbord";
import AddReview from "./AddReview/AddReview";
import AddBikes from "./AddBikes/AddBikes";
import AddAdmin from "./AddAdmin/AddAdmin";
import useAuth from "../hooks/useAuth";
import ShowAdminDeshbord from "./ShowDeshbord/ShowAdminDeshbord";
import AdminRoute from "./AdminRoute/AdminRoute";
import AllBikes from "./AllBikes/AllBikes";

const drawerWidth = 200;

const Deshbord = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { logOut, isAdmin, user } = useAuth();

  const { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box sx={{ pt: 15, bgcolor: "#bddeeb", height: "100vh" }}>
        {isAdmin ? (
          <Box>
            <Link to="/home">
              <Button
                variant="text"
                sx={{ my: 1, mx: 3, color: "black", fontWeight: 800 }}
              >
                View Site
              </Button>{" "}
            </Link>
            <Link to={`${url}`}>
              <Button
                variant="text"
                sx={{ my: 1, mx: 3, color: "black", fontWeight: 800 }}
              >
                Deshbord
              </Button>{" "}
            </Link>

            <Link to={`${url}/addbikes`}>
              {" "}
              <Button
                variant="text"
                sx={{ my: 1, mx: 3, color: "black", fontWeight: 800 }}
              >
                Add Bikes
              </Button>
            </Link>
            <Link to={`${url}/allbikes`}>
              {" "}
              <Button
                variant="text"
                sx={{ my: 1, mx: 3, color: "black", fontWeight: 800 }}
              >
                ALL Bikes
              </Button>
            </Link>
            <Link to={`${url}/addadmin`}>
              {" "}
              <Button
                variant="text"
                sx={{ my: 1, mx: 3, color: "black", fontWeight: 800 }}
              >
                Add Admin
              </Button>
            </Link>
          </Box>
        ) : (
          <Box>
            <NavLink to="/bikes">
              <Button
                variant="text"
                sx={{ my: 1, mx: 3, color: "black", fontWeight: 800 }}
              >
                Buy More
              </Button>
            </NavLink>
            <Link to={`${url}`}>
              <Button
                variant="text"
                sx={{ my: 1, mx: 3, color: "black", fontWeight: 800 }}
              >
                My Orders
              </Button>{" "}
            </Link>
            <Link to={`${url}/addreview`}>
              {" "}
              <Button
                variant="text"
                sx={{ my: 1, mx: 3, color: "black", fontWeight: 800 }}
              >
                Add Review
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", bgcolor: "#F0F2F1", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ bgcolor: "#1B3E41" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight: 800, flexGrow: 1 }}
          >
            DESHBORD
          </Typography>
          <Button onClick={logOut}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Toolbar />
        <Switch>
          {isAdmin ? (
            <AdminRoute exact path={path}>
              <ShowAdminDeshbord></ShowAdminDeshbord>
            </AdminRoute>
          ) : (
            <Route exact path={path}>
              <ShowDeshbord></ShowDeshbord>
            </Route>
          )}

          <Route path={`${path}/addreview`}>
            <AddReview user={user}></AddReview>
          </Route>
          <AdminRoute path={`${path}/addbikes`}>
            <AddBikes></AddBikes>
          </AdminRoute>
          <AdminRoute path={`${path}/allbikes`}>
            <AllBikes></AllBikes>
          </AdminRoute>
          <AdminRoute path={`${path}/addadmin`}>
            <AddAdmin></AddAdmin>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
};

export default Deshbord;
