import React from 'react'
import {Box, Grid, styled, TextField, Typography} from "@mui/material";

const TopBar = () => {
    return (
        <Grid container spacing={4} alignItems={"center"} justifyContent={"center"}>
            <Grid item>
                <Typography variant={"h1"} component={"div"} sx={Title}>Person
                    <Box sx={YellowStick}> </Box>
                </Typography>

            </Grid>
            <Grid item>
                <Typography variant={"h1"} component={"div"} sx={Title}>Document
                    <Box sx={YellowStick}> </Box>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant={"h1"} component={"div"} sx={Title}>Location
                    <Box sx={YellowStick}> </Box>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default TopBar


const Title = {
    fontSize: "24px",
    width: "150px",
    fontFamily:"MuliBold",
    display:"flex",
    flexDirection:"column",
    gap:"8px",
    textAlign: "center",
}
const YellowStick = {
    height: "8px", width: "100%", bgcolor: "#fee934", borderRadius: "0 0 10px 10px"
}