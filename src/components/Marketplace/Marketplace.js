import React from 'react'
import {Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {AppBar, Box, Button, CssBaseline, Drawer, List, Toolbar, Typography} from "@mui/material";
import Logo from '../../assets/imgs/cash-logo.png'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShareIcon from '@mui/icons-material/Share';
import {NavButton, UserName} from "./style";
import Wallet from "./Wallet/Wallet";
import Send from "./Wallet/Send/Send";

const drawerWidth = 300;

const Marketplace = () => {
    const location = useLocation()
    const router = useNavigate()
    console.log(location)
    return (<Box sx={{display: "flex"}}>
        <CssBaseline/>
        <AppBar
            position="fixed"
            sx={{
                width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, boxShadow: "none",
            }}
        >
            <Box sx={{flexGrow: 1, bgcolor: "#fee934", py: 2}}>
            </Box>
        </AppBar>
        <Drawer
            sx={{
                width: drawerWidth, flexShrink: 0, position: "relative", "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    background: "transparent linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%) 0% 0% no-repeat padding-box",
                    overflow: "hidden",
                    boxShadow: "0px 4px 12px #00000030",
                    borderRight: "0",
                    pr: 2,
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Box sx={{my: 4, mx: 2}}>
                <img src={Logo} width={"140px"} alt=""/>
            </Box>
            <UserName variant={"h3"} component={"div"}>Saif Mohamed <Box
                sx={{
                    background: "transparent linear-gradient(180deg, #FEE934 0%, #FEC034 100%) 0% 0% no-repeat padding-box",
                    width: "100px",
                    borderRadius: "8px",
                    height: "5px",
                }}> </Box></UserName>
            <Toolbar/>
            <List>
                {[{text: "Wallet", icon: <AccountBalanceWalletIcon/>}, {
                    text: "Profile", icon: <PersonIcon/>
                }, {text: "Referral", icon: <ShareIcon/>}, {
                    text: "Purchase", icon: <AttachMoneyIcon/>
                },].map((item, index) => (<NavButton
                    size="large"
                    key={index}
                    startIcon={item.icon}
                    onClick={() => {
                        router(`/Marketplace/${item.text.toLowerCase()}`);
                    }}
                >
                    {item.text}
                </NavButton>))}
            </List>
        </Drawer>
        <Box
            component="main"
            sx={{
                flexGrow: 1, bgcolor: "background.default", p: 3, mt: 6,
            }}
        >
            <Routes>
                <Route path="wallet" element={<Wallet/>}/>
                <Route path="wallet/send" element={<Send/>}/>
                <Route path="wallet/receive" element={<h1>Reviece page</h1>}/>
            </Routes>
        </Box>
    </Box>)
}

export default Marketplace