import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { useTheme } from "@material-ui/core";

const ShowDeshbord = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const url = `https://stark-gorge-80580.herokuapp.com/emailorders?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);

  // delate
  const handleDelate = (id) => {
    const procced = window.confirm("Sure to delate Orders");
    if (procced) {
      const url = `https://stark-gorge-80580.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingOrder = orders.filter((order) => order._id !== id);
            setOrders(remainingOrder);
            alert("delated SuccessFully");
          }
        });
    }
  };

  return (
    <div>
      {isMobile ? (
        <Grid container spacing={2}>
          {orders?.map((order) => (
            <Grid item xs={12} md={6}>
              <Card sx={{ display: "flex", mx: "auto" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 90 }}
                  image={order?.productimg}
                  alt="Live from space album cover"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {order?.productName}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {order?.price}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {order?.payment}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <NavLink to="/pay">
                      <Button variant="contained" sx={{ m: 1 }}>
                        Pay
                      </Button>
                    </NavLink>
                    <Button
                      variant="contained"
                      onClick={() => handleDelate(order?._id)}
                    >
                      Cencel
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2}>
          {orders?.map((order) => (
            <Grid item xs={10} md={6}>
              <Card sx={{ display: "flex", mx: "auto" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={order?.productimg}
                  alt="Live from space album cover"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {order?.productName}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {order?.price}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {order?.payment}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <NavLink to="/pay">
                      <Button variant="contained" sx={{ m: 1 }}>
                        Pay
                      </Button>
                    </NavLink>
                    <Button
                      variant="contained"
                      onClick={() => handleDelate(order?._id)}
                    >
                      Cencel
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ShowDeshbord;
