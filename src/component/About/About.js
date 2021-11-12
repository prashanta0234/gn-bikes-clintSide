import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const About = () => {
  return (
    <div>
      <Header></Header>
      <Box sx={{ minHeight: "100vh" }}>
        {" "}
        <Typography>About Us is comming soon</Typography>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default About;
