import { Button, CircularProgress, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@material-ui/core";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Login.css";
import { TramOutlined } from "@mui/icons-material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required().min(5),
  })
  .required();

const Registration = () => {
  const location = useLocation();
  const history = useHistory();
  const { registation, isloding } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useAuth();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (e) => {
    if (e?.password !== e?.password2) {
      alert("Your PassWord didnt match!");
      return;
    }

    registation(e.email, e.password, e.name, location, history);
    console.log(errors.message);
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
                  mx: "auto",
                  bgcolor: "white",
                }}
                className="forpc"
              >
                <form onSubmit={handleSubmit(handleRegister)}>
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
                    type="text"
                    // helperText={errors}
                    {...register("name", { required: true, maxLength: 20 })}
                    sx={{ width: "100%", mb: 1 }}
                  />{" "}
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type="email"
                    {...register("email", { required: TramOutlined })}
                    sx={{ width: "100%", mb: 1 }}
                  />{" "}
                  <br />
                  <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    type="password"
                    {...register("password", { required: true })}
                    sx={{ width: "100%", mb: 1 }}
                  />
                  <TextField
                    id="standard-basic"
                    label=" Re-Type-Password"
                    variant="standard"
                    type="password"
                    {...register("password2", { required: true })}
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
                    {isloding ? (
                      <CircularProgress />
                    ) : (
                      <Typography>Register</Typography>
                    )}
                  </Button>
                  <Typography>
                    Already Have an Account?
                    <Link to="/login"> Please Login</Link>
                  </Typography>
                </form>
              </Box>
            ) : (
              <Box
                sx={{
                  mt: 15,
                  // border: "1px solid black",
                  width: "40%",

                  boxShadow: 3,
                  mx: "auto",
                  bgcolor: "white",
                }}
                className="forpc"
              >
                <form onSubmit={handleSubmit(handleRegister)}>
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
                    {...register("name", { required: true, maxLength: 20 })}
                    sx={{ width: "100%", mb: 1 }}
                  />{" "}
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type="email"
                    {...register("email", { required: true })}
                    sx={{ width: "100%", mb: 1 }}
                  />{" "}
                  <br />
                  <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    type="password"
                    {...register("password", { required: true })}
                    sx={{ width: "100%", mb: 1 }}
                  />
                  <TextField
                    id="standard-basic"
                    label=" Re-Type-Password"
                    variant="standard"
                    type="password"
                    {...register("password2", { required: true })}
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
                    {isloding ? (
                      <CircularProgress />
                    ) : (
                      <Typography>Register</Typography>
                    )}
                  </Button>
                  <Typography>
                    Already Have an Account?
                    <Link to="/login"> Please Login</Link>
                  </Typography>
                </form>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Registration;
