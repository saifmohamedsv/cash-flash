import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "./Card/Card";
import { ContainerStyle, RoadmapTitle } from "./style";

const CardsData = [
  {
    date: "January 2022",
    title: "Wallet",
    content:
      "Our wallet offers maximum security and peace of mind, so you can rest assured that your investments are protected.",
  },
  {
    date: "February 2022",
    title: "Exchange",
    content:
      "Our platform makes it easy to get started with trading digital currencies. Plus, we offer high-speed transactions and 24/7 customer support. ",
  },
  {
    date: "March 2022",
    title: "Market Place",
    content:
      "Shopping platform with one simple interface and unparalleled customer service. ",
  },
  {
    date: "June 2022",
    title: "Mobile App",
    content:
      "Our Application is packed with features that will help you keep track of your portfolios, make informed investment decisions, and stay on top of the latest news and trends in the crypto world.",
  },
];
const Roadmap = () => {
  return (
    <Box sx={ContainerStyle} id="Roadmap">
      <Container maxWidth="xl">
        <Grid container spacing={4} direction="column">
          <Grid item xs={12} alignItems="center">
            <Typography variant="h1" component="div" sx={RoadmapTitle}>
              Roadmap
            </Typography>
          </Grid>
          <Grid container item spacing={2}>
            {CardsData.map((card) => (
              <Card data={card} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Roadmap;
