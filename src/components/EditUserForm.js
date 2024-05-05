import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const EditUserForm = ({ user, updateUser, closeEditForm }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleUpdate = () => {
    console.log(user.id,"user id");
    console.log(editedUser,"edit user")
    updateUser(user.id, editedUser);
    closeEditForm();
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 24,
    background:"#092635",
    p: 4,
  };

  return (
    <Box sx={style}>
      <Typography variant="h6" component="h2" color="secondary" gutterBottom>
        EDIT USER
      </Typography>
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <TextField
          name="name"
          label="Name"
          color="secondary"
          variant="outlined"
          fullWidth
          margin="normal"
          value={editedUser.name}
          onChange={handleChange}
        />
        <TextField
          name="username"
          label="Username"
          color="secondary"
          variant="outlined"
          fullWidth
          margin="normal"
          value={editedUser.username}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          color="secondary"
          variant="outlined"
          fullWidth
          margin="normal"
          value={editedUser.email}
          onChange={handleChange}
        />
        <TextField
          name="phone"
          label="Phone"
          variant="outlined"
          color="secondary"
          fullWidth
          margin="normal"
          value={editedUser.phone}
          onChange={handleChange}
        />
        <TextField
          name="website"
          label="Website"
          color="secondary"
          variant="outlined"
          fullWidth
          margin="normal"
          value={editedUser.website}
          onChange={handleChange}
        />
        <Button variant="contained" color="secondary" onClick={handleUpdate}>
          UPDATE
        </Button>
      </Paper>
    </Box>
  );
};

export default EditUserForm;
