import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../images/logo.png";
import { Link, useHistory } from "react-router-dom";

const pages = [
  {
    label: "Home",
    slug: "/",
  },
  {
    label: "Doctors",
    slug: "/doctorsidenav",
  },
  {
    label: "Patients",
    slug: "/patients",
  },
  {
    label: "Pharmacy",
    slug: "/pharmacy",
  },
  {
    label: "Blogs",
    slug: "/blogs",
  },
];
// "Doctors", "Patients", "Pharmacy", "Blogs"
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settings2 = [
  {
    optionName: "Profile",
    slug: "/profile",
  },
  {
    optionName: "Doctors",
    slug: "/doctors",
  },
  {
    optionName: "Account",
    slug: "/account",
  },
  {
    optionName: "Dashboard",
    slug: "/dashboard",
  },
  {
    optionName: "Patients",
    slug: "/patients",
  },
  {
    optionName: "Blogs",
    slug: "/blogs",
  },
];

const Headers = () => {
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigationMenu = (slug) => {
    handleCloseNavMenu();
    history.push(slug);
    console.log(slug);
  };
  
  return (
    <AppBar position="static" style={{ background: "#FFFFFF" }}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={logo} alt="" srcset="" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              style={{ background: "#a6a4a4" }}
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
                <MenuItem
                  key={page?.label}
                  onClick={() => handleNavigationMenu(page?.slug)}
                >
                  <Typography textAlign="center">{page?.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img src={logo} alt="" srcset="" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page?.label}
                onClick={() => handleNavigationMenu(page?.slug)}
                sx={{
                  m: 2,
                  color: "#4a4646",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                {page?.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Link
                  to="/login"
                  className="bg-primary text-white px-3 py-1 m-2"
                >
                  Login
                </Link>
                <Link
                  to="/logout"
                  className="border border-primary text-primary px-3 py-1 m-2"
                >
                  Logout
                </Link>
              </MenuItem>
              {settings2.map((setting, idx) => {
                return (
                  <Link
                    key={idx}
                    to={setting?.slug}
                    className="d-block px-5 py-2 my-1 border"
                  >
                    {setting.optionName}
                  </Link>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Headers;

/* 

import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button, createMuiTheme, Menu, ThemeProvider } from "@mui/material";
const theme = createMuiTheme({});
const Headers = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = (e) => {
        if (e.currentTarget.localName !== "ul") {
            const menu = document.getElementById("simple-menu").children[2];
            const menuBoundary = {
                left: menu.offsetLeft,
                top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
                right: menu.offsetLeft + menu.offsetHeight,
                bottom: menu.offsetTop + menu.offsetHeight
            };
            if (
                e.clientX >= menuBoundary.left &&
                e.clientX <= menuBoundary.right &&
                e.clientY <= menuBoundary.bottom &&
                e.clientY >= menuBoundary.top
            ) {
                return;
            }
        }

        setOpen(false);
    };

    theme.props = {
        MuiList: {
            onMouseLeave: (e) => {
                handleClose(e);
            }
        }
    };
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button
                    id="menubutton1"
                    aria-owns={open ? "simple-menu" : null}
                    aria-haspopup="true"
                    onMouseOver={handleOpen}
                    onMouseLeave={handleClose}
                    style={{ zIndex: 1301 }}
                >
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={open}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                >
                    Menu
                    <br />
                    Items
                </Menu>
            </ThemeProvider>
        </div>
    );
};

export default Headers;

*/
