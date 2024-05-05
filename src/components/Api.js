import axios from "axios";

const UserControlKey = "659d82d7633f9aee79098e60";
const endpoint = "users-records";
export const api = `https://${UserControlKey}.mockapi.io/api/v1/`;

const getUsers = async () => {
  try {
    const response = await axios.get(`${api}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};

const createUser = async (user) => {
  try {
    const response = await axios.post(`${api}/${endpoint}`, user);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

const updateUser = async (id, updatedUser) => {
  try {
    console.log(id,"id api");
    console.log(updateUser,"updated user api");
    const response = await axios.put(`${api}/${endpoint}/${id}`, updatedUser);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${api}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export { getUsers, createUser, updateUser, deleteUser };  
