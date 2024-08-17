import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Drawer,
  Menu,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { LogoWrapper } from "components/Header/headerStyles";
import MockBuddyLogo from "assets/images/mocklogo.svg";
import HeaderDropdown from "components/Dropdowns/HeaderDropdown";

const pages = [
  { name: "Interview Types", type: "dropdown" },
  { name: "Faq", type: "button" },
  { name: "Feedback", type: "button" },
  { name: "Blog", type: "button" },
  { name: "Pricing", type: "button" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Headers = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = () => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };
  const options = [
    { label: "Item 1", url: "/item1" },
    { label: "Item 2", url: "/item2" },
    { label: "Item 3", url: "/item3" },
  ];

  const handleSelect = (option) => {
    console.log("Selected Option:", option);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: { md: "space-between", xs: "space-between" },
            gap: { lg: "12rem" },
          }}
        >
          {window.screen.width > 900 && (
            <LogoWrapper>
              <img src={MockBuddyLogo} className="header-logo" alt="logo" />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "1.75rem",
                }}
              >
                MOCKBUDDY
              </Typography>
            </LogoWrapper>
          )}

          <Box sx={{ display: { md: "none" } }}>
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
            <Drawer
              anchor="left"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: { width: "80%", backgroundColor: "white", color: "black" },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <LogoWrapper mobile={true}>
                  <img src={MockBuddyLogo} className="header-logo" alt="logo" />
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: "flex", md: "none" },
                      flexGrow: 1,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    MOCKBUDDY
                  </Typography>
                </LogoWrapper>
                <IconButton
                  onClick={handleCloseNavMenu}
                  sx={{
                    alignSelf: "flex-end",
                    mb: 2,
                    right: "0.75rem",
                    top: "0.6rem",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "1rem",
                  height: "100%",
                  p: 2,
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={index}
                    onClick={page.type === "button" ? handleCloseNavMenu : null}
                    sx={{ width: "100%" }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        color: "black",
                        fontSize: "1.1rem",
                        fontWeight: 400,
                      }}
                    >
                      {page.type === "dropdown" ? (
                        <HeaderDropdown
                          name={page.name}
                          items={options}
                          onSelect={handleSelect}
                        />
                      ) : (
                        page.name
                      )}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
          {window.screen.width <= 900 && (
            <LogoWrapper mobile={true}>
              <img src={MockBuddyLogo} className="header-logo" alt="logo" />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                }}
              >
                MOCKBUDDY
              </Typography>
            </LogoWrapper>
          )}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            {pages.map((page, index) => (
              <MenuItem
                key={index}
                onClick={page.type === "button" ? handleCloseNavMenu : null}
              >
                <Typography textAlign="center" sx={{ color: "black" }}>
                  {page.type === "dropdown" ? (
                    <HeaderDropdown
                      name={page.name}
                      items={options}
                      onSelect={handleSelect}
                    />
                  ) : (
                    page.name
                  )}
                </Typography>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Headers;
