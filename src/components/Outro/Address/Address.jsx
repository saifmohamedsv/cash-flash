import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { AddressTitle, ContainerStyle } from "../style";
import RoomIcon from "@mui/icons-material/Room";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Address = () => {
  return (
    <Grid item lg={3} sm={6} xs={12}>
      <Typography variant="h1" component="div" sx={AddressTitle}>
        <RoomIcon /> CashFlash UAB, <br />
        <br /> Didžioji st. 18, <br />
        <br /> Vilnius 01128, <br />
        <br /> Lithuania
      </Typography>
      <Typography variant="h1" component="div" sx={{ ...AddressTitle, mt: 2 }}>
        <MailOutlineIcon />
        info@cashflash.io
      </Typography>
    </Grid>
  );
};

export default Address;
