import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const AddUserForm = ({ addUser, lastUsedId }) => {
  const [user, setUser] = useState({
    id: lastUsedId + 1,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    addUser(user);
    setUser({
      id: lastUsedId + 2,
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    });
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '400px',
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 24,
    background:"#092635",
    p: 4
  };


  return (
    <Box sx={style}>
      <Typography variant="h6" component="h2" color="secondary" gutterBottom>
        ADD USER
      </Typography>
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <TextField
          name="name"
          label="Name"
          color="secondary"
          variant="outlined"
          fullWidth
          margin="normal"
          value={user.name}
          onChange={handleChange}
        />
        <TextField
          name="username"
          label="Username"
          color="secondary"
          variant="outlined"
          fullWidth
          margin="normal"
          value={user.username}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          color="secondary"
          variant="outlined"
          fullWidth
          margin="normal"
          value={user.email}
          onChange={handleChange}
        />
        <TextField
          name="phone"
          label="Phone"
          color="secondary"
          variant="outlined"
          fullWidth
          margin="normal"
          value={user.phone}
          onChange={handleChange}
        />
        <TextField
          name="website"
          label="Website"
          color="secondary"
          variant="outlined"
          fullWidth
          margin="normal"
          value={user.website}
          onChange={handleChange}
        />
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          SAVE
        </Button>
      </Paper>
    </Box>
  );
};

export default AddUserForm;
