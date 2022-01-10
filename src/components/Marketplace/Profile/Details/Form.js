import {Button, Grid, styled, TextField} from "@mui/material";
import React from 'react'

const Form = () => {
    return (
        <Grid container xs={12} sx={{mt: 4}} spacing={6} alignItems={"center"} justifyContent={"center"}>
            <Grid item xs={6}>
                <InputField label={"first name"} value={"Saif"}/>
            </Grid>
            <Grid item xs={6}>
                <InputField label={"middle name"}/>
            </Grid>
            <Grid item xs={6}>
                <InputField label={"last name"} value={"Mohamed"}/>
            </Grid>
            <Grid item xs={6}>
                <InputField label={"Date of Birth"} value={"5/8/2002"}/>
            </Grid>
            <Grid item xs={6}>
                <InputField label={"Place of birth"} value={"Egypt"}/>
            </Grid>
            <Grid item xs={6}>
                <InputField label={"Gender"} value={"Male"}/>
            </Grid>
            <Grid item container xs={6} spacing={2}>
                <Grid item xs={6}>
                    <CancelButton>Verify</CancelButton>
                </Grid>
                <Grid item xs={6}>
                    <SendButton>Change</SendButton>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Form

const SendButton = styled(Button)({
    background: "#FEE934 0% 0% no-repeat padding-box",
    boxShadow: "0px 8px 16px #FEE93434",
    borderRadius: "1000px",
    color: "#212121",
    fontFamily: "NotoSans",
    fontWeight: "600",
    padding: "12px 24px",
    fontSize: "16px",
    width: "100%",
    "&:hover": {
        backgroundColor: "#212121",
        color: "#fee934",
    },
    "&:active": {
        background: "#FEE934 0% 0% no-repeat padding-box",
        color: "#212121",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem  rgba(254, 233, 52, .4)",
    },
});
const CancelButton = styled(Button)({
    background: "#A3A3A3 0% 0% no-repeat padding-box",
    boxShadow: "0px 8px 16px #FEE93434",
    borderRadius: "1000px",
    color: "#fff",
    fontFamily: "NotoSans",
    fontWeight: "600",
    padding: "12px 24px",
    fontSize: "16px",
    width: "100%",
    "&:hover": {
        backgroundColor: "#fff",
        color: "#A3a3a3",
    },
    "&:active": {
        background: "#FEE934 0% 0% no-repeat padding-box",
        color: "#212121",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem  rgba(254, 233, 52, .4)",
    },
});
const InputField = styled(TextField)({
    width: "100%", flexGrow: 1,
    "& label": {
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
        width: "100%",
        flexGrow: 1,
        backdropFilter: "blur(6px)",
        '& fieldset': {
            border: "1px solid #D6D6D6",
        },
        '&.Mui-focused fieldset': {
            border: "2px solid", borderColor: '#212121',
        },
    },
});