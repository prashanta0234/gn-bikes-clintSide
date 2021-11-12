import { Button, CircularProgress, Grid } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Login.css";

const Registration = () => {
  const location = useLocation();
  const history = useHistory();
  const [input, setInput] = useState({});
  const { registation, isloding } = useAuth();
  useAuth();
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

  const handleRegister = (e) => {
    if (input?.password !== input?.password2) {
      alert("Your PassWord didnt match!");
      return;
    }

    registation(input.email, input.password, input.name, location, history);
    e.preventDefault();
  };

  return (
    <div className="login">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                mt: 15,
                // border: "1px solid black",
                width: "40%",

                boxShadow: 3,
                mx: "auto",
                bgcolor: "white",
              }}
            >
              <Box sx={{ p: 6 }} component="form" onSubmit={handleRegister}>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", fontWeight: 800 }}
                >
                  Registration
                </Typography>
                <TextField
                  id="standard-basic"
                  label="Enter Your Name"
                  variant="standard"
                  name="name"
                  type="text"
                  onChange={handleOnchange}
                  sx={{ width: "100%", mb: 1 }}
                />{" "}
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  name="email"
                  type="email"
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
                <TextField
                  id="standard-basic"
                  label=" Re-Type-Password"
                  variant="standard"
                  type="password"
                  name="password2"
                  onChange={handleOnchange}
                  sx={{ width: "100%", mb: 1 }}
                />
                <Button
                  sx={{
                    width: "100%",
                    my: 2,
                    backgroundImage:
                      "linear-gradient(to right, #19d3ae, #0fcfec)",
                    padding: "15px 30px",
                    border: "none",

                    color: "white",
                    borderRadius: " 5px",
                    cursor: "pointer",
                    marginTop: "20px",
                  }}
                  type="submit"
                >
                  {" "}
                  Register
                </Button>
                <Typography>
                  Already Have an Account?
                  <Link to="/login"> Please Login</Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Registration;
