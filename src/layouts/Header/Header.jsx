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
import { useDispatch } from "react-redux";
import { actions } from '../../Slices/user.slice'

const pages = ["products", "about", "contacts"];

const Header = () => {
  const cart = useCart();
  const favorite = useFavorite();
  const { isAuth, email } = useUser();


  const dispatch = useDispatch();



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
              {isAuth ? <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}><Link to={'/fake-store/profile'}>{email}</Link><div className="logOut-icon">
                <button onClick={() => dispatch(actions.logoutUser())} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                  </svg>
                  <div style={{ fontSize: 20 }}>Выйти</div>
                </button>
              </div> </div> : <div ><Link to={'/fake-store/sign-in'}>Login</Link></div>}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
