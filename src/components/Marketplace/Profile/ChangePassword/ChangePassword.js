import React from 'react'
import {Button, Grid, Paper, styled, TextField, Typography} from "@mui/material";

const ChangePassword = () => {
    return (<Paper elevation={0} sx={PaperStyle}>
        <Typography variant={"h4"} component={"div"}>Change Password</Typography>
        <Grid container sx={{mt: 4}} spacing={2}>
            <Grid item xs={12}>
                <InputField label={"current password"}/>
            </Grid>
            <Grid item container xs={12} spacing={6}>
                <Grid item>
                    <InputField label={"New Password"}/>
                </Grid>
                <Grid item>
                    <InputField label={"confirm New Password"}/>
                </Grid>
                <Grid item xs={12}>
                    <ChangeButton>Change</ChangeButton>
                </Grid>
            </Grid>
        </Grid>
    </Paper>)
}

export default ChangePassword


const PaperStyle = {
    p: 4, borderRadius: "8px", mt: 4, boxShadow: "3px 3px 8px #00000029",
}


const InputField = styled(TextField)({
    width: "100%", flexGrow: 1, "& label": {
        color: "#54595F", fontFamily: "MuliBold", textTransform: "capitalize"
    }, "& label.Mui-focused": {
        color: "#54595F",
    }, '& .MuiOutlinedInput-root': {
        background: "#fff",
        borderRadius: "10px",
        border: "none",
        fontSize: "16px",
        boxShadow: "inset 0px 3px 6px #00000029",
        fontWeight: "NotoSans",
        minWidth: "340px",
        flexGrow: 1,
        backdropFilter: "blur(6px)",
        '& fieldset': {border: "1px solid #D6D6D6",},
        '&.Mui-focused fieldset': {
            border: "2px solid", borderColor: '#212121',
        },
    },
});

const ChangeButton = styled(Button)({
    background: "#FEE934 0% 0% no-repeat padding-box",
    boxShadow: "0px 8px 16px #FEE93434",
    borderRadius: "1000px",
    color: "#212121",
    fontFamily: "NotoSans",
    fontWeight: "600",
    padding: "12px 24px",
    fontSize: "16px",
    minWidth: "340px",
    "&:hover": {
        backgroundColor: "#212121", color: "#fee934",
    },
    "&:active": {
        background: "#FEE934 0% 0% no-repeat padding-box", color: "#212121",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem  rgba(254, 233, 52, 0.4)",
    },
});