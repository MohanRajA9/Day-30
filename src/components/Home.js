// Home.js
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DataTable from './DataTable';
import { Button, Modal } from '@mui/material';
import AddUserForm from './AddUserForm';
import { getUsers, createUser, updateUser as updateUserData, deleteUser } from './Api';
import EditUserForm from './EditUserForm';

const Home = () => {
  const [openAddForm, setOpenAddForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [userDataList, setUserDataList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const users = await getUsers();
      setUserDataList(users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const OpenAddForm = () => setOpenAddForm(true);
  const CloseAddForm = () => setOpenAddForm(false);

  const OpenEditForm = (user) => {
    setSelectedUser(user);
    setOpenEditForm(true);
  };

  const CloseEditForm = () => {
    setSelectedUser(null);
    setOpenEditForm(false);
  };

  const addUser = async (newUser) => {
    try {
      const addedUser = await createUser(newUser);
      setUserDataList((prevUsers) => [...prevUsers, addedUser]);
      CloseAddForm();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const updateUser = async (id,editedUser) => {
    try {
      console.log("Updating user:",id, editedUser);
      const updatedUser = await updateUserData(id, editedUser);
      console.log("Updated user:", updatedUser);
      setUserDataList((prevUsers) =>
        prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
      CloseEditForm();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUserDataList((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: '#092635' }}>
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit" component="div">
                User Management
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button color="inherit" variant='outlined' onClick={OpenAddForm}>
                ADD USER
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      <DataTable
        userDataList={userDataList}
        onEdit={OpenEditForm}
        onDelete={handleDeleteUser}
      />
      <Modal
        open={openAddForm}
        onClose={CloseAddForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddUserForm addUser={addUser} />
      </Modal>

      {openEditForm ? (
        <Modal
          open={openEditForm}
          onClose={CloseEditForm}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {selectedUser && (
            <EditUserForm
              user={selectedUser}
              updateUser={updateUser}
              closeEditForm={CloseEditForm}
            />
          )}
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
