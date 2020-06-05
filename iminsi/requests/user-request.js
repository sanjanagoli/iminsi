import axios from 'axios';

const URL = 'http://localhost:9090/api';
// const URL = 'http://iminsi-api.herokuapp.com/api/user';

const signUp = (params) => {
  return new Promise((resolve, reject) => {
    axios.post(`${URL}/signup`, params)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const signIn = (params) => {
  return new Promise((resolve, reject) => {
    axios.post(`${URL}/signin`, params)
      .then((response) => {
        // console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateUser = (params) => {
  return new Promise((resolve, reject) => {
    axios.put(`${URL}/${params.id}`, { params })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

const getInterests = (user) => {
  return new Promise((resolve, reject) => {
    axios.get(`${URL}/${user.id}/profileInterests`, { user })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

const getOrganizations = (user) => {
  return new Promise((resolve, reject) => {
    axios.get(`${URL}/${user.id}/trustedSources`, { user })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

const getUserArticles = (user) => {
  return new Promise((resolve, reject) => {
    axios.get(`${URL}/${user.id}/profileArticles`, { user })
      .then((response) => {
        resolve(response.data);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {
  signUp,
  signIn,
  updateUser,
  getInterests,
  getOrganizations,
  getUserArticles,
};
