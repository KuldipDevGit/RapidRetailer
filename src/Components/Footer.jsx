import { Stack, Grid, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import RapidRetailerLogo from "./RapidRetailerLogo";

const Footer = () => {
  return (
    <Stack
      className="footer"
      sx={{
        backgroundImage: "linear-gradient(to bottom right, #f2f2f2, #fff)",
        boxShadow:
          "0 5px 10px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        p: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <RapidRetailerLogo />
        </Grid>

        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Get in Touch
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">info@RapidRetailer.com</Typography>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <Typography variant="body2">+91 9555599487</Typography>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <Typography variant="body2">
                150 Feet Ring Rd, Jagannath Plot, Rajkot, Gujarat, 360005
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Follow Us
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="#"
                variant="body2"
                sx={{ textDecoration: "none", color: "#000" }}
              >
                <FacebookIcon /> Facebook
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="#"
                variant="body2"
                sx={{ textDecoration: "none", color: "#000" }}
              >
                <InstagramIcon /> Instagram
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="#"
                variant="body2"
                sx={{ textDecoration: "none", color: "#000" }}
              >
                <TwitterIcon /> Twitter
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{
              bgcolor: "#fefeef",
              p: 2,
              color: "#6c757d",
              textAlign: "center",
            }}
          >
            &copy; 2024 RapidRetailer. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;
