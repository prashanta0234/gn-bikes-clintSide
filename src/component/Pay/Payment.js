import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const Payment = () => {
  return (
    <div>
      <Header></Header>
      <Box sx={{ minHeight: "100vh" }}>
        <Typography variant="h2"> Payment systemis coming soon</Typography>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Payment;
