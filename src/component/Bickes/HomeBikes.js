import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import ShowHomeBike from "./ShowHomeBike";
import { Grid } from "@mui/material";
import "./HomeBikes.css";

const HomeBikes = () => {
  const [homeBike, setHomeBike] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => setHomeBike(data));
  }, []);
  const sliceBike = homeBike.slice(0, 6);
  //   console.log(sliceBike);
  return (
    <div>
      <Container>
        <Box sx={{ textAlign: "center", my: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Our Bikes
            <Box className="bikeHeder"></Box>
          </Typography>
          <Grid container spacing={2} sx={{ mx: "auto" }}>
            {sliceBike.map((bike) => (
              <Grid item xs={12} md={4}>
                <ShowHomeBike bikes={bike}></ShowHomeBike>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default HomeBikes;
