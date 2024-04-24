import React, { useState } from "react";
import { Link } from "react-router-dom";



import FavoriteIcon from "@mui/icons-material/Favorite";
import { useCart } from "../../hooks/useCart";
import { useFavorite } from "../../hooks/useFavorite";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useUser } from "../../hooks/useUser";

const pages = ["products", "about", "contacts"];

const Header = () => {
  const cart = useCart();
  const favorite = useFavorite();
  const user = useUser();



  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="header">
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              <Link to={"/fake-store/"}>LOGO</Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                    <Typography textAlign="center">
                      <Link
                        style={{ color: "black", textTransform: "capitalize" }}
                        to={`/fake-store/${page}`}
                      >
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h1"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link
                style={{ display: "flex", alignItems: "center" }}
                to={"/fake-store"}
              >
                <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                LOGO
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to={`/fake-store/${page}`}>{page}</Link>
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <div className="userStore" style={{ display: "flex", gap: 20 }}>
                <div className="favorite">
                  <Link to={"/fake-store/favorite"}>
                    {favorite.length !== 0 ? (
                      <Badge color="secondary" badgeContent={favorite.length}>
                        <FavoriteIcon />
                      </Badge>
                    ) : (
                      <Badge color="secondary" showZero>
                        <FavoriteIcon />
                      </Badge>
                    )}
                  </Link>
                </div>
                <div className="cart">
                  <Link to={"/fake-store/cart"}>
                    {cart.length !== 0 ? (
                      <Badge
                        color="secondary"
                        style={{ fontSize: 20 }}
                        badgeContent={cart.length}
                      >
                        <ShoppingCartIcon />
                      </Badge>
                    ) : (
                      <Badge color="secondary" showZero>
                        <ShoppingCartIcon />
                      </Badge>
                    )}
                  </Link>
                </div>
              </div>
            </Box>
            <div className="user">
              {user.value ? <h3>{user.value}</h3> : <div style={{display : 'flex', flexDirection : "column"}}><Link to={'/fake-store/sign-in'}>Sign In</Link><Link to={'/fake-store/sign-up'} >SignUp</Link></div>}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
