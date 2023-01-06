import Axios from 'axios';
// Add User
export const addUser = async (
  email,
  fullName,
  // phoneNumber,
  // country,
  // state,
  // city,
  // address,
  // zipCode,
  // company,
  role,

  // Password,
  createdBy
) => {
  const response = await Axios.post(
    'http://localhost:3001/api/assistant/addUser',
    {
      email,
      fullName,
      // phoneNumber,
      // country,
      // state,
      // city,
      // address,
      // zipCode,
      // company,
      role,
      // Password,
      createdBy,
    }
  );
  // if (response.data) {
  //   localStorage.setItem('user', JSON.stringify(response.data));
  // }
  // console.log('adduser', response.data);

  return response.data;
};

export const getUsersList = async () => {
  const response = await Axios.get(
    'http://localhost:3001/api/assistant/getUsers',
    {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`,
      },
    }
  );
  // if (response.data) {
  //   localStorage.setItem('user', JSON.stringify(response.data));
  // }
  // console.log('getuser', response.data);

  return response.data;
};

export const deleteUserInfo = async (userId) => {
  const response = await Axios.delete(
    `http://localhost:3001/api/assistant/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`,
      },
    }
  );
  // if (response.data) {
  //   localStorage.setItem('user', JSON.stringify(response.data));
  // }
  //console.log('deleteUser', response.data);

  return response.data;
};

export const editUser = async (user) => {
  const response = await Axios.put(
    `http://localhost:3001/api/assistant/${user._id}`,
    user,
    {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`,
      },
    }
  );
  // if (response.data) {
  //   localStorage.setItem('user', JSON.stringify(response.data));
  // }
  console.log('editUser', user, response.data);

  return response.data;
};
