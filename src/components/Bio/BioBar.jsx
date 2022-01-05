import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Neurons from "./Neurons";
import PPlogo from "./P2P";
import {
  StartButton,
  LeftContentContainer,
  NeuronsStyle,
  SubTitleStyle,
  TitleStyle,
  RightTitle,
  RightContentContainer,
  RightSubTitle,
} from "./style";

const BioBar = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "340px" }}>
      <Grid container sx={{ position: "relative", height: "100%" }}>
        <Box sx={NeuronsStyle}>
          <Neurons />
        </Box>
        <Grid
          item
          container
          lg={6}
          xs={12}
          sx={{ bgcolor: "secondary.main", p: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={LeftContentContainer}>
            <Typography variant="h1" component="div" sx={TitleStyle}>
              Trade on
              <PPlogo />
            </Typography>
            <Typography variant="h1" component="div" sx={SubTitleStyle}>
              New opportunities in cryptocurrencies
            </Typography>
            <StartButton>Start Now</StartButton>
          </Box>
        </Grid>
        <Grid item lg={6} xs={12} sx={{ bgcolor: "primary.main", p: 3 }}>
          <Box sx={RightContentContainer}>
            <Typography variant="h1" component="div" sx={RightTitle}>
              Secure, instant payments in any cryptocurrency
            </Typography>
            <Typography variant="h1" component="div" sx={RightSubTitle}>
              We are always looking for ways to improve the user experience and
              make transactions easier. That’s why our l mobile app allows you
              more flexibility in your daily life!
            </Typography>
            <StartButton>Start Now</StartButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BioBar;
