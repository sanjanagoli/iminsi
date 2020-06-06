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
    axios.put(`${URL}/user/${params.id}`, { params })
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
    axios.get(`${URL}/user/${user.id}/profileInterests`)
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
    axios.get(`${URL}/user/${user.id}/trustedSources`)
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
    axios.get(`${URL}/user/${user.id}/profileArticles`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAvailableCountries = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${URL}/resources/countries`)
      .then((response) => {
        resolve(response.data);
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
  getAvailableCountries,
};
