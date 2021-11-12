// import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Typography, useMediaQuery } from "@mui/material";
import "./Review.css";
import ShowReview from "./ShowReview";
import { useTheme } from "@material-ui/core";
// import { Reviews } from "@mui/icons-material";

const Review = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const settings1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <div>
      <Box className="review">
        <Container>
          <Typography
            variant="h3"
            sx={{ color: "#BDDEEB", textAlign: "center", pt: 2 }}
          >
            Reviews
          </Typography>
          <Slider {...(isMobile ? settings2 : settings1)}>
            {reviews.map((review) => (
              <ShowReview review={review}></ShowReview>
            ))}
          </Slider>
        </Container>
      </Box>
    </div>
  );
};

export default Review;
