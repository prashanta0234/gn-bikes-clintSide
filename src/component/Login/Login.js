import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuth from "../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const schema = yup
  .object()
  .shape({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const { UserLogin, isloding } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLogin = (e) => {
    UserLogin(e?.email, e?.password, location, history);
    console.log(e);
  };

  return (
    <div className="login">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            {isMobile ? (
              // mobile device
              <Box
                sx={{
                  mt: 2,
                  width: "90%",
                  boxShadow: 3,
                  bgcolor: "white",
                  mx: "auto",
                  borderRadius: "10px",
                }}
                className="forpc"
              >
                <form onSubmit={handleSubmit(handleLogin)}>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "center", fontWeight: 800 }}
                  >
                    Login
                  </Typography>
                  <TextField
                    type="email"
                    sx={{ width: "100%", mb: 1 }}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    {...register("email", { required: true })}
                  />{" "}
                  <br />
                  <TextField
                    sx={{ width: "100%", mb: 1 }}
                    type="password"
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    {...register("password")}
                  />{" "}
                  <br />
                  {/* <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
                  {/* <input type="submit" /> */}
                  <Button
                    type="submit"
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
                  >
                    {isloding ? (
                      <CircularProgress />
                    ) : (
                      <Typography>Sign In</Typography>
                    )}
                  </Button>
                </form>
                <Typography>
                  You are new? Please
                  <Link to="/registration"> Create Account </Link>
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  // textAlign: "center",
                  boxShadow: 3,
                  mt: 15,
                  // border: "1px solid black",
                  width: "40%",

                  bgcolor: "white",
                  mx: "auto",

                  borderRadius: "10px",
                }}
                className="forpc"
              >
                <form onSubmit={handleSubmit(handleLogin)}>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "center", fontWeight: 800 }}
                  >
                    Login
                  </Typography>
                  <TextField
                    type="email"
                    sx={{ width: "100%", mb: 1 }}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    {...register("email", { required: true })}
                  />{" "}
                  <br />
                  <TextField
                    sx={{ width: "100%", mb: 1 }}
                    type="password"
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    {...register("password")}
                  />{" "}
                  <br />
                  {/* <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
                  {/* <input type="submit" /> */}
                  <Button
                    type="submit"
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
                  >
                    {isloding ? (
                      <CircularProgress />
                    ) : (
                      <Typography>Sign In</Typography>
                    )}
                  </Button>
                  <Typography>
                    You are new? Please
                    <a href="/registration"> Create Account </a>
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

export default Login;
