import React from "react";
import {Box, Checkbox, Container, CssBaseline, Grid, Link, Stack, Typography} from "@mui/material";
import {
    BoxStyle,
    ContainerStyle, IconCircle,
    InputField,
    NewUserStyle,
    ORSignin,
    OrStick,
    RightImage,
    SignInButton,
    Title
} from "./style";
import {FiLinkedin, FiFacebook, FiTwitter} from 'react-icons/fi';
import CashLogo from '../../assets/imgs/WhiteLogo.png'
import {Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

const Account = () => {
    const router = useNavigate()
    return (
        <Box sx={ContainerStyle}>
            <CssBaseline/>
            <Container maxWidth={"xl"}
                       sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
                <Box sx={BoxStyle}>
                    <Grid container sx={{height: "100%"}}>
                        <Grid item lg={6} xs={12} container direction={"column"} alignItems={"center"}
                              justifyContent={"center"}
                              sx={{p: 4, gap: "12px"}}>
                            {/* New User ??! */}
                            <Stack spacing={2}>
                                <Box>
                                    <img src={CashLogo} width={"140px"} alt=""/>
                                </Box>
                                <Typography variant={"h1"} component={"div"} sx={Title}>Sign in</Typography>
                                <Typography variant={"h1"} component={"div"} sx={NewUserStyle}>new user?
                                    <Link
                                        onClick={() => {
                                            router('/Register')
                                        }}
                                        sx={{color: "#fee934", cursor: "pointer", textDecoration: "none"}}>
                                        create a free account
                                    </Link>
                                </Typography>
                                <Formik initialValues={{email: '', password: ''}} onSubmit={() => {
                                    console.log('done')
                                }}>
                                    {(formikProps) => (<Form>
                                        <Stack direction={"column"} alignItems={"start"} spacing={1}>
                                            <InputField label={"Username or Email"} name={"email"}/>
                                            <InputField label={"Password"} type={"password"} name={"password"}/>
                                            <Typography sx={{color: "#fff", fontSize: "16px", fontFamily: "NotoSans"}}>
                                                <Checkbox defaultChecked sx={{
                                                    color: "#fee934", '&.Mui-checked': {color: "#fee934"}
                                                }}/>Keep me signed in</Typography>
                                            <SignInButton>Sign in</SignInButton>
                                        </Stack>
                                    </Form>)}
                                </Formik>
                                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                    <Box sx={OrStick}></Box>
                                    <Typography variant={"p"} component={"div"} sx={ORSignin}>Or Sign in
                                        With</Typography>
                                    <Box sx={OrStick}></Box>
                                </Stack>
                                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={3}>
                                    <Box sx={IconCircle}>
                                        <FiFacebook/>
                                    </Box>
                                    <Box sx={IconCircle}>
                                        <FiLinkedin/>
                                    </Box>
                                    <Box sx={IconCircle}>
                                        <FiTwitter/>
                                    </Box>
                                </Stack>

                            </Stack>
                        </Grid>
                        <Grid item lg={6} xs={12} sx={{...RightImage, display: {xs: 'none', lg: "block"}}}>
                            {/* ======= Right IMAGE Background =====*/}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>)
}

export default Account