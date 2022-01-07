import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../Logo";
import FaceBook from "../../../assets/imgs/facebookIcon.png";
import LinkedIn from "../../../assets/imgs/linkedin.png";
import Twitter from "../../../assets/imgs/TwitterIcon.png";
import { FirstRowText, SocialIcons } from "../style";

const ColLogo = () => {
  return (
    <Grid item lg={3} sm={6} xs={12}>
      <Logo />
      <Typography variant="h1" component="div" sx={FirstRowText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 4 }}>
        <Box sx={SocialIcons}>
          <img src={FaceBook} width="24px" height="24px" alt="" />
        </Box>
        <Box sx={SocialIcons}>
          <img src={Twitter} width="24px" height="24px" alt="" />
        </Box>
        <Box sx={SocialIcons}>
          <img src={LinkedIn} width="24px" height="24px" alt="" />
        </Box>
      </Stack>
    </Grid>
  );
};

export default ColLogo;
