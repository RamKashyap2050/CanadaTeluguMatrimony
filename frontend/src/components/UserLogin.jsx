import React, { useState } from 'react';
import { Box, Container, Paper, Typography, TextField, Button, Avatar } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://wallpaperaccess.com/full/2463219.jpg")',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end', 
        paddingRight: '20px', 
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Avatar sx={{ margin: '0 auto', backgroundColor: 'orange' }}>
            <LockIcon />
          </Avatar>
          <Typography variant="h5" component="div" gutterBottom>
            Login
          </Typography>
          {isLoggedIn ? (
            <Typography variant="body1" gutterBottom>
              Welcome, {username}!
            </Typography>
          ) : (
            <form>
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                onClick={handleLogin}
              >
                Login
              </Button>
            </form>
          )}
            <a href='/usersignup' style={{textDecoration:"none", textAlign:"center", margin:"auto"}}>New Member?</a>
        </Paper>
      </Container>
    </Box>
  );
};

export default UserLogin;
