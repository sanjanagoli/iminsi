import axios from 'axios';

// const URL = 'http://localhost:9090/api/user';
const URL = 'http://iminsi-api.herokuapp.com/api/user';

const signUp = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${URL}`, data)
      .then((response) => {
        resolve(response.data.response);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};


const signIn = (data) => {
  return new Promise((resolve, reject) => {
    axios.get(`${URL}/${data.id}`)
      .then((response) => {
        resolve(response.data.response);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

const updateUser = (data) => {
  return new Promise((resolve, reject) => {
    axios.put(`${URL}/${data.id}`, { data })
      .then((response) => {
        resolve(response.data.response);
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
        resolve(response.data.response);
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
        resolve(response.data.response);
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
        resolve(response.data.response);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export {
  signUp,
  signIn,
  updateUser,
  getInterests,
  getOrganizations,
  getUserArticles
};
