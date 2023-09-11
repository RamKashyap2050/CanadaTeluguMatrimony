import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();
  const handleSignup = () => {
    const userData = {
      email: email,
      password: password,
      first_name: firstname,
      last_name: lastname,
    };

    axios
    .post("/Users/register", userData)
    .then((response) => {
      console.log("Signup successful:", response.data);
      
      localStorage.setItem("userData", JSON.stringify(response.data));
      navigate('/userprofile')
    })
    .catch((error) => {
      console.error("Signup error:", error);
    });
  
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://wallpaperaccess.com/full/2463219.jpg")',
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end", // Align to the right
        paddingRight: "20px", // Add right padding for space
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{ padding: 4, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        >
          <Avatar sx={{ margin: "0 auto", backgroundColor: "green" }}>
            <PersonAddIcon />
          </Avatar>
          <Typography variant="h5" component="div" gutterBottom>
            Signup
          </Typography>

          <form>
            <TextField
              label="First Name"
              fullWidth
              margin="normal"
              variant="outlined"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
              label="Last Name"
              fullWidth
              margin="normal"
              variant="outlined"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="contained"
              fullWidth
              size="large"
              color="primary"
              onClick={handleSignup}
            >
              Signup
            </Button>
          </form>

          <a
            href="/"
            style={{
              textDecoration: "none",
              textAlign: "center",
              marginTop: "0.75rem",
            }}
          >
            Already Member?
          </a>
        </Paper>
      </Container>
    </Box>
  );
};

export default UserSignup;
