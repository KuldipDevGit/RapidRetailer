import { Stack, Grid, Button, IconButton } from "@mui/material"; // Correct imports

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
        margin: "o auto",
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
              <Button variant="outlined" size="small">
                Shop
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" size="small">
                Men
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" size="small">
                Women
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" size="small">
                Kids
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" size="small">
                Contact
              </Button>
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
