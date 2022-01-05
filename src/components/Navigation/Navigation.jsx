import {
  AppBar,
  Container,
  CssBaseline,
  IconButton,
  Menu,
  Toolbar,
  Typography,
  Button,
  Link,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import React from "react";
import Hero from "../Hero/Hero";
import { LgLogoStyle, LinkStyle, LgMenuItems } from "../Navigation/style";
import Logo from "../../assets/imgs/cash-logo.png";
import Wallmart from "../WalletMarket/Wallmart";
import BioBar from "../Bio/BioBar";

const NavHeight = "70px";
const Navigation = () => {
  const pages = ["Offers", "Roadmap", "White Paper"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ disaply: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          height: NavHeight,
          bgcolor: "gray.main",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={LgLogoStyle}>
              <img src={Logo} alt="" style={{ maxWidth: "120px" }} />
            </Box>
            <Box sx={LgMenuItems}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu}>
                  <Link sx={LinkStyle}>{page}</Link>
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                alignItems: "flex-end",
              }}
            >
              <Box sx={{ mr: 2, flexGrow: 1 }}>
                <img src={Logo} alt="" style={{ maxWidth: "80px" }} />
              </Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* // ========== MAIN */}
      <Box
        sx={{
          mt: NavHeight,
          width: "100%",
          dispaly: "flex",
          flexDirection: "column",
        }}
      >
        <Hero navH={NavHeight} />
        <Wallmart />
       <BioBar />
      </Box>
    </Box>
  );
};

export default Navigation;
