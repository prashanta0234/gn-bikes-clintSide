// import { , Typography } from "@mui/material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Rating,
  Typography,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

import { Grid } from "@mui/material";
const AllBikes = () => {
  const [homeBikes, setHomeBike] = useState([]);
  useEffect(() => {
    fetch("https://stark-gorge-80580.herokuapp.com/bikes")
      .then((res) => res.json())
      .then((data) => setHomeBike(data));
  }, []);
  // delate
  const handleDelate = (id) => {
    const procced = window.confirm("Sure to delate Orders");
    if (procced) {
      const url = `https://stark-gorge-80580.herokuapp.com/bikes/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingOrder = homeBikes.filter(
              (homeBike) => homeBike._id !== id
            );
            setHomeBike(remainingOrder);
            alert("delated SuccessFully");
          }
        });
    }
  };
  return (
    <div>
      <Box>
        <Container>
          <Typography variant="h2" sx={{ color: "tomato", fontWeight: 800 }}>
            {" "}
            Totoal {homeBikes?.length} Bikes
          </Typography>
          <Box sx={{ textAlign: "center", my: 3 }}>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Our Bikes
              <Box className="bikeHeder"></Box>
            </Typography>
            <Grid container spacing={2} sx={{ mx: "auto" }}>
              {homeBikes.map((bike) => (
                <Grid item xs={12} md={4}>
                  <Card sx={{ maxWidth: 345, bgcolor: "#F0F2F1", mt: 5 }}>
                    <Box sx={{ p: 2 }}>
                      <img src={bike?.img} width="100%" height="200" alt="" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {bike?.bikeName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <Rating
                            name="half-rating-read"
                            defaultValue={bike?.reating}
                            precision={0.5}
                            readOnly
                          />
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700 }}
                          color="text.secondary"
                        >
                          {bike?.price}
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{ display: "flex", justifyContent: "space-around" }}
                      >
                        {/*  */}
                        <Button
                          variant="contained"
                          sx={{
                            py: 1,
                            px: 3,
                            bgcolor: "#DF453E",
                            color: "white",
                          }}
                          onClick={() => handleDelate(bike?._id)}
                        >
                          Delate
                        </Button>
                      </CardActions>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default AllBikes;
