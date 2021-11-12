import { Avatar, Card, CardContent, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ShowReview = ({ review }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 350,
          height: "250px",
          m: 2,
          bgcolor: "transparent",
          border: "1px solid ",
          color: "white",
          mt: 7,
        }}
      >
        <Box sx={{ color: "white", m: 2 }}>
          <CardContent>
            <Typography variant="body2" color="white">
              {review?.des.slice(0, 150)}
            </Typography>
          </CardContent>

          <Box sx={{ textAlign: "center" }}>
            <Rating
              name="half-rating-read"
              defaultValue={review?.rating}
              precision={0.5}
              readOnly
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: " space-evenly" }}>
            <Avatar alt="name" src={review?.profile} />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#BDDEEB" }}
            >
              {review?.name}
            </Typography>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default ShowReview;
