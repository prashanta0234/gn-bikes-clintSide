import {
  Button,
  Container,
  Divider,
  Grid,
  Rating,
  Typography,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BuyModal from "./BuyModal";

const BuyNow = () => {
  const { _id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(_id);
  const [bikes, setBikes] = useState([]);
  const [bike, setBike] = useState({});
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch("https://stark-gorge-80580.herokuapp.com/bikes")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  useEffect(() => {
    const findServices = bikes.find((services) => services._id === _id);
    console.log(findServices);
    setBike(findServices);
  }, [bikes]);
  console.log(bike);
  // const rating = parseFloat(bike.reating);
  return (
    <div>
      <Header></Header>
      <Container>
        <Box sx={{ my: 5 }}>
          {success && (
            <Alert>
              Proceed SuccessFull Please Goto Deshbord And pay Bill.
            </Alert>
          )}
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <img src={bike?.img} width="100%" alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Divider></Divider>
              <Typography variant="h5" sx={{ my: 1, mt: 2 }}>
                {bike?.bikeName}
              </Typography>

              <Rating
                name="half-rating-read"
                defaultValue={bike?.reating}
                precision={0.5}
                readOnly
              />

              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "tomato", my: 1 }}
              >
                {bike?.price}
              </Typography>
              <Divider></Divider>
              <Typography variant="h5" sx={{ fontWeight: 800, my: 1 }}>
                Color
              </Typography>
              <Box sx={{ display: "flex", my: 2 }}>
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    bgcolor: "#fd5555eb",
                    mx: 1,
                  }}
                ></Box>
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    bgcolor: "#5379e5",
                    mx: 1,
                  }}
                ></Box>
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    bgcolor: "#2f4278",
                    mx: 1,
                  }}
                ></Box>
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    bgcolor: "#3ff155",
                    mx: 1,
                  }}
                ></Box>
              </Box>
              <Divider></Divider>
              <Box sx={{ my: 2 }}>
                <Button
                  variant="contained"
                  sx={{ py: 1, px: 3, bgcolor: "#DF453E", color: "white" }}
                  onClick={handleOpen}
                >
                  {" "}
                  Procced To shiped{" "}
                </Button>
                <BuyModal
                  open={open}
                  handleClose={handleClose}
                  bike={bike}
                  setSuccess={setSuccess}
                ></BuyModal>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default BuyNow;
