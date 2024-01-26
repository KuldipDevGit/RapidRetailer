import { Stack, Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RapidRetailerLogo from "./RapidRetailerLogo";

const Header = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        fontFamily: "sans-serif",
        fontSize: "16px",
        margin: "0 auto",
        boxShadow: "0 5px 10px rgba(0,0,0,0.2), 0 10px 25px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        padding: "15px",
        transform: "skewX(-5deg)",
        backgroundImage: `linear-gradient(
    to bottom right,
    #f2f2f2,
    #fff
  )`,
      }}
    >
      <Grid container alignItems="center" sx={{ width: "100%" }}>
        <Grid item xs={2} textAlign="center">
          <RapidRetailerLogo />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Link
                component="button"
                variant="outlined"
                size="small"
                sx={{ textDecoration: "none", color: "#000" }}
                to="/shop"
              >
                Shop
              </Link>
            </Grid>
            <Grid item>
              <Link
                component="button"
                variant="outlined"
                size="small"
                sx={{ textDecoration: "none", color: "#000" }}
                to="/men"
              >
                Men
              </Link>
            </Grid>
            <Grid item>
              <Link
                component="button"
                variant="outlined"
                size="small"
                sx={{ textDecoration: "none", color: "#000" }}
                to="/woman"
              >
                Women
              </Link>
            </Grid>
            <Grid item>
              <Link
                component="button"
                variant="outlined"
                size="small"
                sx={{ textDecoration: "none", color: "#000" }}
                to="/kids"
              >
                Kids
              </Link>
            </Grid>
            <Grid item>
              <Link
                component="button"
                variant="outlined"
                size="small"
                sx={{ textDecoration: "none", color: "#000" }}
                to="/shop"
              >
                Contact
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item>
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton edge="end" aria-label="login">
                <AccountCircleIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Header;
