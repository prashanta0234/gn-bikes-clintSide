import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Banner.css";

import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <Box sx={{ bgcolor: "#F0F2F1" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} sx={{ p: 5, mt: 2 }}>
          <img src="https://i.ibb.co/KhcqJys/bike.png" width="100%" alt="" />
        </Grid>

        <Grid item xs={12} md={5} sx={{ mt: 5 }}>
          <Box sx={{ px: 2 }}>
            <Typography variant="h2" sx={{ color: "#1C3E40", fontWeight: 800 }}>
              Top Quality, Factory Price
            </Typography>
            <Typography sx={{ mt: 5 }}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                  <Typography sx={{ color: "#1C3E40", fontWeight: 800 }}>
                    <DoneOutlineIcon
                      sx={{ color: "#DF453E" }}
                    ></DoneOutlineIcon>{" "}
                    Othentic Product
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Typography sx={{ color: "#1C3E40", fontWeight: 800 }}>
                    <DoneOutlineIcon
                      sx={{ color: "#DF453E" }}
                    ></DoneOutlineIcon>{" "}
                    Low Price
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Typography sx={{ color: "#1C3E40", fontWeight: 800 }}>
                    <DoneOutlineIcon
                      sx={{ color: "#DF453E" }}
                    ></DoneOutlineIcon>{" "}
                    6 Month free Service
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Typography sx={{ color: "#1C3E40", fontWeight: 800 }}>
                    <DoneOutlineIcon
                      sx={{ color: "#DF453E" }}
                    ></DoneOutlineIcon>{" "}
                    EMI Facilities
                  </Typography>
                </Grid>
              </Grid>
            </Typography>
            <Box sx={{ my: 5 }}>
              <NavLink to="/bikes">
                <Button
                  variant="contained"
                  sx={{
                    py: 2,
                    px: 5,
                    bgcolor: "#DF453E",
                    color: "white",
                  }}
                >
                  Explore
                </Button>
              </NavLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
