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
// import useAuth from "../../hooks/useAuth";
import { Box } from "@mui/system";
import { useTheme } from "@material-ui/core";

const ShowAdminDeshbord = () => {
  // const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const url = `https://stark-gorge-80580.herokuapp.com/orders`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

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
            alert("deleted SuccessFully");
          }
        });
    }
  };
  console.log(orders);
  return (
    <div>
      <Typography variant="h2" sx={{ color: "tomato", fontWeight: 800 }}>
        {" "}
        Total {orders?.length} Orders
      </Typography>
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
                      Price: {order?.price}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Color: {order?.color}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{ fontWeight: 800 }}
                    >
                      Payment Type: {order?.payment}
                    </Typography>
                    <Box sx={{ my: 2 }}>
                      <Typography variant="h6">User information</Typography>
                      <Typography color="text.secondary">
                        User Name: {order?.name}
                      </Typography>
                      <Typography color="text.secondary">
                        User Email: {order?.email}
                      </Typography>
                      <Typography color="text.secondary">
                        User Address: {order?.userAdress}, Post Code:
                        {order?.postCode}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <Button
                      sx={{ m: 1 }}
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
            <Grid item xs={11} md={6}>
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
                      Price: {order?.price}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Color: {order?.color}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{ fontWeight: 800 }}
                    >
                      Payment Type: {order?.payment}
                    </Typography>
                    <Box sx={{ my: 2 }}>
                      <Typography variant="h6">User information</Typography>
                      <Typography color="text.secondary">
                        User Name: {order?.name}
                      </Typography>
                      <Typography color="text.secondary">
                        User Email: {order?.email}
                      </Typography>
                      <Typography color="text.secondary">
                        User Address: {order?.userAdress}, Post Code:
                        {order?.postCode}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <Button
                      sx={{ m: 1 }}
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

export default ShowAdminDeshbord;
