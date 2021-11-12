import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../../../images/logo.png";
import "./Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <Box sx={{ bgcolor: "#bddeeb" }}>
        <Container>
          <Grid container spacing={2} sx={{ py: 5 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3">
                {" "}
                <Link to="/home">
                  <img src={logo} width="200px" alt="" />
                </Link>{" "}
              </Typography>
              <Typography variant="h6">
                A State Bicycle is more than the sum of its curated parts. It’s
                how you explore your state.
              </Typography>
              <Typography sx={{ mt: 3 }}>
                Fixed gear will always be in our blood. But these days, we're
                crafting a variety of bikes to suit different riding styles,
                levels and landscapes. Pavement to off-road, city, trail, course
                or mountain: Every State Bicycle is built to take you as far and
                wide as you may roam.
              </Typography>
              <Typography>
                <a
                  target="_blank"
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                >
                  <FacebookIcon
                    sx={{ fontSize: "50px", m: 2, color: "#FF903E" }}
                  ></FacebookIcon>
                </a>
                <a target="_blank" href="https://twitter.com/" rel="noreferrer">
                  <TwitterIcon
                    sx={{ fontSize: "50px", m: 2, color: "#FF903E" }}
                  ></TwitterIcon>
                </a>
                <a
                  target="_blank"
                  href="https://www.pinterest.com/"
                  rel="noreferrer"
                >
                  <PinterestIcon
                    sx={{ fontSize: "50px", m: 2, color: "#FF903E" }}
                  ></PinterestIcon>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/"
                  rel="noreferrer"
                >
                  <YouTubeIcon
                    sx={{ fontSize: "50px", m: 2, color: "#FF903E" }}
                  ></YouTubeIcon>
                </a>
              </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography
                variant="h5"
                sx={{ color: "black" }}
                className="footerLink"
              >
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/bikes">Bikes</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box>
                <Typography variant="h5">NEWSLETTER</Typography>
                <Typography sx={{ mt: 5 }}>
                  Subscibe to the Shaeng mailing list to receive updates on new
                  arrivals,offers and other discount information
                </Typography>
                <Typography>
                  <TextField
                    fullWidth
                    label="Enter Your Email"
                    type="email"
                    id="fullWidth"
                    sx={{
                      //   borderRadius: "50px",
                      bgcolor: "white",
                      mt: 5,
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "black", mt: 3, borderRadius: "20px" }}
                  >
                    Subscribe
                  </Button>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#1B3E41", p: 2 }}>
        <Typography sx={{ textAlign: "center", color: "white" }}>
          Copyright © GN Bike 2021 | Design by Prashanta | All rights reserved
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
