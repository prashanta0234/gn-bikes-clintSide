import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

import { Grid } from "@mui/material";
import ShowBikes from "./ShowBikes";

const Bikes = () => {
  const [homeBikes, setHomeBike] = useState([]);
  useEffect(() => {
    fetch("https://stark-gorge-80580.herokuapp.com/bikes")
      .then((res) => res.json())
      .then((data) => setHomeBike(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <Box>
        <Container>
          <Box sx={{ textAlign: "center", my: 3 }}>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Our Bikes
              <Box className="bikeHeder"></Box>
            </Typography>
            <Grid container spacing={2} sx={{ mx: "auto" }}>
              {homeBikes.map((bike) => (
                <Grid item xs={11} md={4}>
                  <ShowBikes bikes={bike}></ShowBikes>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Bikes;
