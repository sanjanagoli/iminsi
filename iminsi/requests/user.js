import axios from 'axios';

const URL = 'http://localhost:9090/api/user';

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


export {
  signUp,
  signIn,
};
