import {
  Button,
  Card,
  CardActions,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import React from "react";

const ShowHomeBike = ({ bikes }) => {
  console.log(bikes);
  return (
    <div>
      <Card sx={{ maxWidth: 345, bgcolor: "#F0F2F1", mt: 5 }}>
        <Box sx={{ p: 2 }}>
          <img src={bikes?.img} width="100%" height="200" alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {bikes?.bikeName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Rating
                name="half-rating-read"
                defaultValue={bikes?.reating}
                precision={0.5}
                readOnly
              />
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700 }}
              color="text.secondary"
            >
              {bikes?.price}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
            <Link to={`/buynow/${bikes._id}`}>
              <Button
                variant="contained"
                sx={{ py: 1, px: 3, bgcolor: "#DF453E", color: "white" }}
              >
                {" "}
                BUY NOW{" "}
              </Button>
            </Link>
          </CardActions>
        </Box>
      </Card>
    </div>
  );
};

export default ShowHomeBike;
