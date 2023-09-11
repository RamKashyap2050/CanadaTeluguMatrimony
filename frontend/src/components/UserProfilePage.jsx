import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const UserProfilePage = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  

  return (
    <Card sx={{ width: '80%', margin: '10px auto', padding:"20px" }}>
      <Card sx={{ maxWidth: '100%', marginBottom: '20px' }}>
        <CardContent>
          <Avatar
            alt="User Profile"
            src={userData.image?.data}
            sx={{ width: 200, height: 200, margin: '0 auto 20px' }}
          />
   
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: '100%', marginBottom:'20px' }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Bio: {userData?.bio}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{maxWidth:'100%'}}>
        <CardContent>
        <Typography variant="h5" component="div" align="center">
            {userData.first_name} {userData.last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Phone Number: {userData?.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Email: {userData.email}
          </Typography>
        </CardContent>
      </Card>
      
    </Card>
  );
};

export default UserProfilePage;
