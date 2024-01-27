import { useState } from "react";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here, e.g., send a request to the server
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      mt={4}
      ml={1}
      mr={1}
      mb={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        /* 3D background effect */
        backgroundImage:
          "linear-gradient(to bottom right, #f5f7fa, #e6ebf1, #d5dce4, #c4cbd7, #b0bec5)",
        backdropFilter: "blur(5px)",
        borderRadius: "10px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid item xs={12} sx={{ mb: 5 }}>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 2 }}>
          Login
        </Typography>
      </Grid>

      <Box component="form" sx={{ width: 300, p: 3 }}>
        <Grid item xs={12}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            // Styling for input fields
            sx={{
              m: 1,
              width: "100%",
              borderColor: "primary.main" /* Highlight border on focus */,
              "&:focus": {
                borderColor: "primary.main",
                boxShadow: "0 0 0 2px rgba(41, 154, 254, 0.25)",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ m: 1, width: "100%" }} // Apply same styling as above
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              width: "100%",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography component="body1">
            Dont have account ! <Link to="/signup">lets create it</Link>
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
}

export default LoginPage;
