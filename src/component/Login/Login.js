import { Button, CircularProgress, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@material-ui/core";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import "./Login.css";

const Login = () => {
  const [input, setInput] = useState({});
  const { UserLogin, isloding } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isloding) {
    return <CircularProgress />;
  }
  const handleOnchange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...input };
    newLoginData[feild] = value;
    setInput(newLoginData);
  };
  const handleLogin = (e) => {
    UserLogin(input?.email, input?.password, location, history);
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="login">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            {isMobile ? (
              <Box
                sx={{
                  mt: 2,
                  // border: "1px solid black",
                  width: "90%",

                  boxShadow: 3,
                  bgcolor: "white",
                  mx: "auto",
                }}
              >
                <Box sx={{ p: 6 }} component="form" onSubmit={handleLogin}>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "center", fontWeight: 800 }}
                  >
                    {" "}
                    Login
                  </Typography>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    onChange={handleOnchange}
                    sx={{ width: "100%", mb: 1 }}
                  />{" "}
                  <br />
                  <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    type="password"
                    name="password"
                    onChange={handleOnchange}
                    sx={{ width: "100%", mb: 1 }}
                  />
                  <Button
                    sx={{
                      width: "100%",
                      my: 2,
                      backgroundImage:
                        "linear-gradient(to right, #19d3ae, #0fcfec)",
                      padding: "10px 25px",
                      border: "none",

                      color: "white",
                      borderRadius: " 5px",
                      cursor: "pointer",
                      marginTop: "20px",
                    }}
                    type="submit"
                  >
                    {" "}
                    Sign In
                  </Button>
                  <Typography>
                    You are new? Please
                    <Link to="/registration"> Create Account </Link>
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  mt: 15,
                  // border: "1px solid black",
                  width: "40%",

                  boxShadow: 3,
                  bgcolor: "white",
                  mx: "auto",
                }}
              >
                <Box sx={{ p: 6 }} component="form" onSubmit={handleLogin}>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "center", fontWeight: 800 }}
                  >
                    {" "}
                    Login
                  </Typography>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    onChange={handleOnchange}
                    sx={{ width: "100%", mb: 1 }}
                  />{" "}
                  <br />
                  <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    type="password"
                    name="password"
                    onChange={handleOnchange}
                    sx={{ width: "100%", mb: 1 }}
                  />
                  <Button
                    sx={{
                      width: "100%",
                      my: 2,
                      backgroundImage:
                        "linear-gradient(to right, #19d3ae, #0fcfec)",
                      padding: "10px 25px",
                      border: "none",

                      color: "white",
                      borderRadius: " 5px",
                      cursor: "pointer",
                      marginTop: "20px",
                    }}
                    type="submit"
                  >
                    {" "}
                    Sign In
                  </Button>
                  <Typography>
                    You are new? Please
                    <Link to="/registration"> Create Account </Link>
                  </Typography>
                </Box>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
<h1>this is login page</h1>;
