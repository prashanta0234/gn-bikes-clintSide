import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Grid } from "@mui/material";

import "./WhyUs.css";

import LoyaltyIcon from "@mui/icons-material/Loyalty";
import SpeedIcon from "@mui/icons-material/Speed";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsIcon from "@mui/icons-material/Settings";

const WhyUs = () => {
  return (
    <div>
      <Box sx={{ bgcolor: "#F0F2F1" }}>
        <Container>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, textAlign: "center", p: 10 }}
          >
            {" "}
            WHY CHOOSE US
            <Box className="bikeHeder"></Box>
          </Typography>
          <Grid container spacing={2} sx={{ pb: 15 }}>
            <Grid item xs={12} md={3} sx={{ px: 2 }}>
              <Box sx={{ display: "flex" }}>
                <LoyaltyIcon sx={{ fontSize: "3rem", color: "#B05B3B" }}>
                  {" "}
                </LoyaltyIcon>
                <Box sx={{ mx: 2 }}>
                  <Typography variant="h6">FINANCING MADE EASY</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our stress-free finance department that can find financial
                    solutions to save you money.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xxs xs={12} md={3} sx={{ px: 2 }}>
              <Box sx={{ display: "flex" }}>
                <SpeedIcon sx={{ fontSize: "3rem", color: "#B05B3B" }}>
                  {" "}
                </SpeedIcon>
                <Box sx={{ mx: 2 }}>
                  <Typography variant="h6">WIDE RANGE OF BRANDS</Typography>
                  <Typography variant="body2" color="text.secondary">
                    With a robust selection of popular vehicles on hand, as well
                    as leading vehicles from BMW and
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} sx={{ px: 2 }}>
              <Box sx={{ display: "flex" }}>
                <ForumIcon sx={{ fontSize: "3rem", color: "#B05B3B" }}>
                  {" "}
                </ForumIcon>
                <Box sx={{ mx: 2 }}>
                  <Typography variant="h6">TRUSTED BY THOUSAND</Typography>
                  <Typography variant="body2" color="text.secondary">
                    10 new offers every day. 350 offers on site, trusted by a
                    community of thousands of user
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} sx={{ px: 2 }}>
              <Box sx={{ display: "flex" }}>
                <SettingsIcon sx={{ fontSize: "3rem", color: "#B05B3B" }}>
                  {" "}
                </SettingsIcon>
                <Box sx={{ mx: 2 }}>
                  <Typography variant="h6">
                    BIKE SERVICE & MAINTENANCE
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our service department maintain your bike to stay safe on
                    the road for many more years.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default WhyUs;
