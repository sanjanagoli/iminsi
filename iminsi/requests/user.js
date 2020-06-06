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
  console.log('inside sign in user - request');
  return new Promise((resolve, reject) => {
    axios.post(`${URL}/signin`, params)
      .then((response) => {
        console.log(response);
        resolve(response.data);
        // allow user to navigate to the next page
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateUser = (params) => {
  return new Promise((resolve, reject) => {
    axios.put(`${URL}/${params.id}`, { params }) // is it params.id? where can i see the content of params
      .then((response) => {
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
};
